/* eslint-disable no-nested-ternary */
import { Row, Col, message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Head from 'next/head';
import Loader from 'src/components/common/base/loader';
import TokenCard from 'src/components/common/base/token-card';
import React, { PureComponent } from 'react';
import './index.less';
import { getResponseError } from 'src/lib/utils';
import { tokenPackageService } from '@services/token-package.service';
import { ITokenPackage } from 'src/interfaces';
import { buyTokenSuccess } from 'src/redux/user/actions';
import { connect } from 'react-redux';
import { isUrl } from '@lib/string';

interface IProps {
  buyTokenSuccess: Function;
}
interface IStates {
  tokens: ITokenPackage[];
  fetching: boolean;
  buying: string;
}

class UserTokensPage extends PureComponent<IProps, IStates> {
  static authenticate = true;

  static layout = 'primary';

  static getInitialProps({ ctx }) {
    const { query } = ctx;
    return {
      action: query.action
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      tokens: [],
      fetching: false,
      buying: null
    };
  }

  componentDidMount() {
    this.getTokens();
  }

  async getTokens() {
    try {
      this.setState({ fetching: true });
      const resp = await tokenPackageService.search({
        sortBy: 'ordering',
        sort: 'asc'
      });
      this.setState({ tokens: resp.data.data || [] });
    } catch (e) {
      const error = await Promise.resolve(e);
      message.error(getResponseError(error));
    } finally {
      this.setState({ fetching: false });
    }
  }

  async buyToken(item) {
    try {
      const rawResponse = await fetch(
        'https://api.nowpayments.io/v1/invoice',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-api-key': '5K7B1X3-YD048GR-PH79F9V-M468RBS'
          },
          body: JSON.stringify({
            price_amount: item.price,
            price_currency: 'usd',
            pay_currency: 'eth',
            order_id: 'RGDBP-21314',
            ipn_callback_url: 'https://nowpayments.io',
            success_url: 'https://hasasecret.com',
            cancel_url: 'https://hasasecret.com'
          })
        }
      );
      const content = await rawResponse.json();
      window.open(content.invoice_url);

      // this.setState({ buying: tokenPackage._id });
      // const resp = await tokenPackageService.buyTokens(tokenPackage._id);
      // if (resp.data) {
      //   if (isUrl(resp.data.paymentUrl)) {
      //     window.open(resp.data.paymentUrl);
      //   }
      //   // message.success('Buy token success');
      //   // this.props.buyTokenSuccess(tokenPackage.tokens);
      // }
    } catch (e) {
      const error = await Promise.resolve(e);
      message.error(getResponseError(error));
    } finally {
      this.setState({ buying: null });
    }
  }

  render() {
    const { fetching, tokens, buying } = this.state;
    return (
      <>
        <Head>
          <title>Funds - Tokens</title>
        </Head>
        <div className="funds-tokens-box">
          <PageHeader title="Buy More Tokens" />
          <div className="tokens-section">
            <div className="tokens-card">
              <Row>
                {fetching ? (
                  <Loader />
                ) : tokens && tokens.length ? (
                  tokens.map((item) => (
                    <Col xs={12} md={8} xl={6} xxl={4} key={item._id}>
                      <TokenCard
                        name={item.name}
                        token={item.tokens}
                        price={item.price}
                        onBuyToken={() => this.buyToken(item)}
                        buying={item._id === buying}
                      />
                    </Col>
                  ))
                ) : (
                  'There is no data'
                )}
              </Row>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = () => ({});
const mapDispatch = { buyTokenSuccess };
export default connect(mapStateToProps, mapDispatch)(UserTokensPage);
