/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/no-danger */
/* eslint-disable dot-notation */
import React, { PureComponent } from 'react';
import Head from 'next/head';
import {
  Row, Col, message, Button
} from 'antd';
import {
  IUIConfig,
  IResponse
} from 'src/interfaces';
import { connect } from 'react-redux';
import Router from 'next/router';
import { camAggregatorService } from '@services/cam-aggregator.service';
import { getResponseError } from '@lib/utils';
import PerformerGrid from '@components/performer/performer-grid';
import AggregatorProfileGridCard from '@components/cam-aggregator/grid-card';

import './details.less';
import Link from 'next/link';
import Title from 'antd/lib/typography/Title';
import Loader from '@components/common/base/loader';
import { backToTop } from '@lib/layout';
import { IAggregatorCams } from 'src/interfaces/aggregator';

interface IProps {
  ui: IUIConfig;
  performer: any;
}
interface IStates {
  relatedCams: any[],
  loading?: boolean;
}

class CamaggregatorDetails extends PureComponent<IProps, IStates> {
  static authenticate = false;

  state = {
    relatedCams: [],
    loading: true
  }

  static async getInitialProps({ ctx }) {
    try {
      const { query } = ctx;
      const resp: IResponse<IAggregatorCams> = await camAggregatorService.profile(query.username);
      if (process.browser) {
        if (!resp.data) return Router.push('/cams');
        if (!resp.data.iframe) {
          message.info('Please few minutes to profile');
          Router.push(`${resp.data.profileLink}`);
        }
        if (!resp.data.iframe) return Router.push({ pathname: '/stream', query: { performer: JSON.stringify(resp.data) } }, `/profile/${resp.data.username}`);
      }

      return {
        performer: resp.data
      };
    } catch (e) {
      if (process.browser) {
        return Router.push('/cams');
      }

      ctx.res.writeHead && ctx.res.writeHead(302, { Location: '/cams' });
      ctx.res.end && ctx.res.end();
      return {};
    }
  }

  componentDidMount() {
    this.getRelatedCams();
    backToTop();
  }

  componentDidUpdate(prevProps: IProps) {
    const { performer } = this.props;
    if (performer !== prevProps.performer) {
      this.getRelatedCams();
      backToTop();
    }
  }

  async getRelatedCams() {
    try {
      await this.setState({ loading: true });
      const { performer } = this.props;
      const resp = await camAggregatorService.related(performer.username);

      await this.setState({ relatedCams: resp.data });
    } catch (error) {
      const err = await Promise.resolve(error);
      message.error(getResponseError(err));
    } finally {
      this.setState({ loading: false });
    }
  }

  _renderRelatedCams() {
    const { relatedCams } = this.state;

    return relatedCams?.length ? (
      <PerformerGrid
        total={relatedCams.length}
        data={relatedCams}
        success
        searching={false}
        gridCard={AggregatorProfileGridCard}
      />
    ) : null;
  }

  _renderIframe(iframe: string) {
    let newSrc = iframe;
    if (/(<([^>]+)>)/i.test(iframe)) {
      const matches = iframe.match(/\bhttps?:\/\/\S+/gi);
      if (!matches.length) return null;
      // eslint-disable-next-line prefer-destructuring
      newSrc = matches[0];
    }
    return <iframe src={newSrc} style={{ width: '100%', border: 'none' }} height="500" frameBorder="none" />;
  }

  render() {
    const {
      performer,
      ui
    } = this.props;
    const { loading } = this.state;
    return (
      <>
        <Head>
          <title>{`${ui?.siteName} | ${performer?.username}`}</title>
        </Head>
        <Loader spinning={loading} fullScreen />
        <Row className="cams-details">
          <Col md={6} xs={24}>
            <div className="profile-card">
              <div className="avatar">
                {performer.avatar && (<img src={performer.avatar} alt={performer.username} style={{ objectFit: 'contain' }} />)}
              </div>

              <div className="profile">
                <div className="name">
                  <span className="lable">Username: </span>
                  <span className="" style={{ textTransform: 'capitalize' }}>
                    <a href={performer.profileLink} target="_blank" rel="noreferrer">
                      {performer.username}
                    </a>

                  </span>
                </div>
                <div className="gender">
                  <span className="lable">Gender: </span>
                  <span className="" style={{ textTransform: 'capitalize' }}>
                    {performer.gender}
                  </span>
                </div>
                {performer.age ? (
                  <div className="age">
                    <span className="lable">Age: </span>
                    <span className="" style={{ textTransform: 'capitalize' }}>
                      {performer.age}
                    </span>
                  </div>
                ) : null}
                <div className="bio">
                  <span>{performer.aboutMe}</span>
                </div>
                <br />
                {performer.tags?.length ? (
                  <>
                    <p>What We do on webcam</p>
                    <div className="tags">
                      {performer.tags.map((tag) => (
                        <Link
                          href={{ pathname: '/cams', query: { tag } }}
                          key={tag}
                          as={`/cams?tag=${tag}`}
                        >
                          <a>
                            #
                            {tag}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
              <Button type="primary" className="custom-button" href={performer.profileLink}>
                <span>{`START LIVE SEX SHOW WITH ${performer.username}`}</span>
              </Button>
            </div>
          </Col>
          <Col md={18} xs={24}>
            {performer.iframe
              ? this._renderIframe(performer.iframe)
              : this._renderRelatedCams()}

          </Col>

          <Title>Related Cams</Title>

          {performer.iframe
            ? this._renderRelatedCams()
            : null}
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ui: state.ui
});
export default connect(mapStateToProps)(CamaggregatorDetails);
