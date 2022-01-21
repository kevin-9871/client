/* eslint-disable camelcase */
/* eslint-disable dot-notation */
import React, { PureComponent } from 'react';
import Head from 'next/head';
import {
  Row, Col, Button, message
} from 'antd';
import { connect } from 'react-redux';
import { IPerformer, IUser, StreamSettings } from 'src/interfaces';
import { messageService, streamService } from 'src/services';
import LivePublisher from '@components/streaming/publisher';
import { SocketContext, Event } from 'src/socket';
import {
  getStreamConversationSuccess,
  loadStreamMessages,
  resetStreamMessage,
  resetAllStreamMessage
} from '@redux/stream-chat/actions';
import { updateStreamingStatus } from '@redux/performer/actions';
import { WEBRTC_ADAPTOR_INFORMATIONS } from 'src/antmedia/constants';
import ChatBox from '@components/stream-chat/chat-box';
import UpdateSatusForm from '@components/performer/streaming-status-update-form';
import Router from 'next/router';
import { getResponseError } from '@lib/utils';

import './index.less';

// eslint-disable-next-line no-shadow
enum EVENT_NAME {
  ROOM_INFORMATIOM_CHANGED = 'public-room-changed',
  USER_LEFT_ROOM = 'USER_LEFT_ROOM'
}

interface P {
  settings: StreamSettings;
  resetStreamMessage: Function;
  resetAllStreamMessage: Function;
  getStreamConversationSuccess: Function;
  loadStreamMessages: Function;
  updateStreamingStatus: Function;
  activeConversation: any;
  performer: IPerformer;
  updating: boolean;
  updateSuccess: boolean;
  updateError: any;
  loggedIn: boolean;
}

interface S {
  loading: boolean;
  sessionId: string;
  initialized: boolean;
  publish_started: boolean;
  total?: number;
  members?: IUser[];
  // blockedUserIds?: string[];
}

class PerformerLivePage extends PureComponent<P, S> {
  static authenticate = true;

  private publisherRef: any;

  private socket: SocketIOClient.Socket;

  constructor(props: P) {
    super(props);
    this.state = {
      loading: false,
      initialized: false,
      publish_started: false,
      sessionId: '',
      total: 0,
      members: []
    };
  }

  componentDidMount() {
    this.socket = this.context;
    this.joinPublicRoom();
    window.addEventListener('beforeunload', this.onbeforeunload);
    Router.events.on('routeChangeStart', this.onbeforeunload);
  }

  componentDidUpdate(prevProps: P) {
    const { updateSuccess, updateError } = this.props;
    if (prevProps.updateSuccess !== updateSuccess && updateSuccess) {
      message.success('Update Status Success.');
    }

    if (prevProps.updateError !== updateError && updateError) {
      message.error(getResponseError(updateError));
    }
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onbeforeunload);
    Router.events.off('routeChangeStart', this.onbeforeunload);
  }

  handler({ total, members, conversationId }) {
    const { activeConversation } = this.props;
    if (activeConversation?.data?._id === conversationId) {
      this.setState({ total, members });
    }
  }

  handleUpdateStatusForm(data) {
    const { updateStreamingStatus: dispatchUpdateStreamingStatus } = this.props;
    dispatchUpdateStreamingStatus(data);
  }

  onbeforeunload = () => {
    this.leavePublicRoom();
  };

  async start() {
    try {
      this.setState({ loading: true });
      const resp = await streamService.goLive();
      const { sessionId } = resp.data;
      this.setState({ sessionId });
      this.publisherRef && this.publisherRef.start();
    } catch (e) {
      const error = await Promise.resolve(e);
      message.error(getResponseError(error));
    } finally {
      this.setState({ loading: false });
    }
  }

  callback(info: WEBRTC_ADAPTOR_INFORMATIONS) {
    const { activeConversation } = this.props;
    const { sessionId } = this.state;
    if (activeConversation && activeConversation.data) {
      this.socket = this.context;
      if (info === WEBRTC_ADAPTOR_INFORMATIONS.INITIALIZED) {
        this.setState({ initialized: true });
        // window['webRTCAdaptor'].publish(sessionId);
        this.publisherRef && this.publisherRef.publish(sessionId);
      } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.PUBLISH_STARTED) {
        this.setState({ publish_started: true, loading: false });
        this.socket.emit('public-stream/live', {
          conversationId: activeConversation.data._id
        });
      } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.PUBLISH_FINISHED) {
        this.setState({ loading: false, publish_started: false });
      } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.CLOSED) {
        this.setState({
          loading: false,
          initialized: false,
          publish_started: false
        });
      }
    }
  }

  async joinPublicRoom() {
    const {
      loadStreamMessages: dispatchLoadStreamMessages,
      getStreamConversationSuccess: dispatchGetStreamConversationSuccess
    } = this.props;
    try {
      this.setState({ loading: true });
      const resp = await streamService.goLive();
      const { conversation } = resp.data;
      if (conversation && conversation._id) {
        dispatchGetStreamConversationSuccess({ data: conversation });
        dispatchLoadStreamMessages({
          conversationId: conversation._id,
          limit: 25,
          offset: 0,
          type: conversation.type
        });
        this.socket = this.context;
        this.socket
          && this.socket.emit('public-stream/join', {
            conversationId: conversation._id
          });
      }
    } catch (e) {
      const error = await Promise.resolve(e);
      message.error(getResponseError(error));
    } finally {
      this.setState({ loading: false });
    }
  }

  leavePublicRoom() {
    const { activeConversation, resetStreamMessage: reset } = this.props;
    if (this.socket && activeConversation && activeConversation.data) {
      const conversation = { ...activeConversation.data };
      this.socket.emit('public-stream/leave', {
        conversationId: conversation._id
      });
      reset();
    }
  }

  userLeftRoomHandle({ username, conversationId }) {
    const { activeConversation } = this.props;
    if (activeConversation?.data?._id === conversationId) {
      const { total, members } = this.state;
      this.setState({
        total: total - 1,
        members: members.filter((m) => m.username !== username)
      });
    }
  }

  async removeAllMessage() {
    const {
      activeConversation,
      performer,
      resetAllStreamMessage: dispatchResetAllMessage
    } = this.props;
    if (
      !activeConversation.data
      || performer._id !== activeConversation.data.performerId
    ) {
      return;
    }

    try {
      if (!window.confirm('Are you sure you want to remove chat history?')) {
        return;
      }
      await messageService.deleteAllMessageInConversation(
        activeConversation.data._id
      );
      dispatchResetAllMessage({ conversationId: activeConversation.data._id });
    } catch (e) {
      const error = await Promise.resolve(e);
      message.error(getResponseError(error));
    }
  }

  render() {
    const { performer, activeConversation, updating } = this.props;
    const {
      loading,
      initialized,
      publish_started,
      members,
      total
    } = this.state;
    return (
      <>
        <Head>
          <title>Go Live</title>
        </Head>

        <Event
          event={EVENT_NAME.ROOM_INFORMATIOM_CHANGED}
          handler={this.handler.bind(this)}
        />
        <Event
          event={EVENT_NAME.USER_LEFT_ROOM}
          handler={this.userLeftRoomHandle.bind(this)}
        />

        <Row>
          <Col xs={24} sm={24} md={12}>
            <UpdateSatusForm
              status={performer.streamingTitle}
              updating={updating}
              submit={this.handleUpdateStatusForm.bind(this)}
            />
            {(!initialized || !publish_started) && (
              <Button
                type="primary"
                onClick={this.start.bind(this)}
                loading={loading}
                block
              >
                Start Streaming
              </Button>
            )}
            <LivePublisher
              {...this.props}
              participantId={performer._id}
              // eslint-disable-next-line no-return-assign
              ref={(ref) => (this.publisherRef = ref)}
              callback={this.callback.bind(this)}
              configs={{
                debug: true,
                bandwidth: 900,
                localVideoId: 'publisher'
              }}
            />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <ChatBox
              {...this.props}
              members={members}
              totalParticipant={total}
              currentPerformer={performer}
            />
            {activeConversation?.data && (
              <div style={{ margin: '10px' }}>
                <Button
                  type="primary"
                  onClick={this.removeAllMessage.bind(this)}
                >
                  Clear message history
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </>
    );
  }
}

PerformerLivePage.contextType = SocketContext;

const mapStateToProps = (state) => ({
  ...state.streaming,
  performer: state.performer.current,
  updating: state.performer.updating,
  updateSuccess: state.performer.updateSuccess,
  updateError: state.performer.updateError,
  activeConversation: state.streamMessage.activeConversation,
  loggedIn: state.auth.loggedIn
});
const mapDispatchs = {
  updateStreamingStatus,
  getStreamConversationSuccess,
  loadStreamMessages,
  resetStreamMessage,
  resetAllStreamMessage
};
export default connect(mapStateToProps, mapDispatchs)(PerformerLivePage);
