/* eslint-disable no-return-assign */
import { generateUuid } from '@lib/string';
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import Player from '@components/streaming/ant-video-player';
import { StreamSettings } from 'src/interfaces';
import { Button } from 'antd';

interface P {
  settings: StreamSettings;
}

class Xcams extends PureComponent<P> {
  private playerRefs = {};

  state = {
    streamIds: []
  };

  componentDidMount() {
    const { streamIds } = this.state;
    const arr = [...streamIds];
    for (let i = 0; i < 5; i += 1) {
      arr.push(generateUuid());
    }

    this.setState({ streamIds: arr });
  }

  play() {
    Object.keys(this.playerRefs).forEach((id) => {
      this.playerRefs[id]?.playHLS(id);
    });
  }

  render() {
    const { streamIds } = this.state;
    return (
      <>
        <Button type="primary" onClick={this.play.bind(this)} disabled>Play</Button>
        {streamIds.length > 0
          && streamIds.map((id) => (
            <Player
              {...this.props}
              sessionId={id}
              configs={{ isPlayMode: true }}
              ref={(ref) => (this.playerRefs[id] = ref)}
            />
          ))}
      </>
    );
  }
}

const mapStateProps = (state) => ({ ...state.streaming });
export default connect(mapStateProps)(Xcams);
