import React, { PureComponent } from 'react';
import {
  IPerformer,
  ICountries,
  IPerformSearch,
  IUIConfig
} from 'src/interfaces';
import PerformerGrid from '@components/performer/performer-grid';
import { connect } from 'react-redux';
import { loginSuccess } from '@redux/auth/actions';
import { updateCurrentUser } from '@redux/user/actions';
import { updateCurrentStudio } from '@redux/studio/actions';
import { favouriteService } from 'src/services';
import { message } from 'antd';
import { getResponseError } from '@lib/utils';
import Router, { withRouter, NextRouter } from 'next/router';
import { getBanners } from '@redux/banner/actions';
import { createSelector } from 'reselect';
import { SocketContext } from 'src/socket';
import Head from 'next/head';
import { camAggregatorService } from '@services/cam-aggregator.service';
import { IAggregatorCategogiesModel } from 'src/interfaces/aggregator-categories';
import AggregatorFilter from '@components/cam-aggregator/aggregator-filter';
import AggregatorProfileGridCard from '@components/cam-aggregator/grid-card';
import Loader from '@components/common/base/loader';

interface IProps {
  router: NextRouter;
  ui: IUIConfig;
  data: IPerformer[];
  searchPerformer?: Function;
  total?: number;
  success?: boolean;
  error?: any;
  searching?: boolean;
  loggedIn?: boolean;
  query?: {
    q: string;
  };
  // categories?: IPerformerCategogies[];
  countries?: ICountries[];
  updatePerformerFavourite: Function;
  getBanners: Function;
  banners: any;
  updateCurrentUser: Function;
  updateCurrentPerformer: Function;
  updateCurrentStudio: Function;
  loginSuccess: Function;
}

interface IStates {
  query: IPerformSearch;
  loading?: boolean;
  sort?: {
    name: string;
    sortBy?: string;
  };
  performers?: any[];
  categories?: IAggregatorCategogiesModel[];
  total?: number;
}

const initQueryState: IPerformSearch = {
  offset: 0,
  limit: 60,
  gender: '',
  category: '',
  country: '',
  sortBy: '',
  sort: 'desc',
  q: ''
};

class CamAggregator extends PureComponent<IProps, IStates> {
  static layout = 'public';

  static authenticate = false;

  constructor(props: IProps) {
    super(props);
    this.state = {
      query: initQueryState,
      loading: true
    };
  }

  async componentDidMount() {
    const { router } = this.props;
    this.search({
      tag: router.query?.tag || '',
      q: router.query?.q || ''
    });
    this.getCamAggregatorCategories();
  }

  componentDidUpdate(prevProps: IProps, prevStates: IStates) {
    const { router } = this.props;
    const { query } = this.state;
    if (
      router.query.q !== prevProps.router.query.q
      || query !== prevStates.query
    ) {
      const q = {
        tag: router.query?.tag || '',
        q: router.query?.q || ''
      } as any;
      if (router.query.q !== prevProps.router.query.q) q.offset = 0;
      this.search(q);
    }

    if (router.query.category !== prevProps.router.query.category) {
      this.setQuery('category', router.query.category || '');
    }
  }

  async onLike(performer: IPerformer) {
    const {
      updatePerformerFavourite: dispatchUpdatePerformerFavorite
    } = this.props;
    const { _id, isFavorite } = performer;
    try {
      await favouriteService.favorite(_id, isFavorite);
      dispatchUpdatePerformerFavorite(_id);
    } catch (error) {
      const e = await Promise.resolve(error);
      message.error(getResponseError(e));
    }
  }

  setFilter(name: string, value: any) {
    const { query } = this.state;
    if (name === 'category' && value !== query.category) {
      Router.push({ pathname: '/cams', query: { category: value } }, `/cams?category=${value}`);
      return;
    }

    this.setState({
      query: {
        ...query,
        [name]: value
      }
    });
  }

  setQuery(name: string, value: any) {
    const { query } = this.state;
    this.setState({
      query: {
        ...query,
        [name]: value
      }
    });
  }

  async getCamAggregatorCategories() {
    const resp = await camAggregatorService.categories({});
    await this.setState({ categories: resp.data });
  }

  search = async (params?) => {
    const { query } = this.state;
    try {
      await this.setState({ loading: true });
      const resp = await camAggregatorService.online({
        ...query,
        ...(params || {})
      });
      this.setState({
        performers: resp.data.data,
        total: resp.data.count
      });
    } catch (error) {
      const err = await Promise.resolve(error);
      message.error(getResponseError(err));
    } finally {
      this.setState({ loading: false });
    }
  };

  clearFilter() {
    this.setState({
      query: initQueryState
    });
  }

  render() {
    const { ui, countries } = this.props;
    const {
      query, performers = [], categories, total, loading
    } = this.state;
    return (
      <>
        <Head>
          <title>
            {ui?.siteName}
            {' '}
            | Cams
          </title>
        </Head>
        <div className="homepage">
          <AggregatorFilter
            categories={categories}
            countries={countries}
            setFilter={this.setFilter.bind(this)}
            clearFilter={this.clearFilter.bind(this)}
            {...query}
          />
          <Loader spinning={loading} fullScreen />
          <PerformerGrid
            {...this.props}
            data={performers}
            total={total}
            success
            onLike={this.onLike.bind(this)}
            title="Live cams"
            isPage
            setFilter={this.setFilter.bind(this)}
            gridCard={AggregatorProfileGridCard}
            {...query}
          />

        </div>
      </>
    );
  }
}

const bannerSelecter = (state) => state.banner.listBanners.data;
const filterBanner = createSelector(bannerSelecter, (banners) => {
  if (!banners.length) return {};

  return {
    topBanners: banners.filter((b) => b.position === 'top'),
    rightBanners: banners.filter((b) => b.position === 'right'),
    bottomBanners: banners.filter((b) => b.position === 'bottom')
  };
});

CamAggregator.contextType = SocketContext;

const mapStateToProps = (state) => ({
  ui: { ...state.ui },
  ...state.performer.performers,
  banners: filterBanner(state),
  countries: state.settings.countries,
  loggedIn: state.auth.loggedIn
  // categories: state.performer.categories.data
});
const mapDispatch = {
  getBanners,
  updateCurrentUser,
  updateCurrentStudio,
  loginSuccess
};
export default connect(mapStateToProps, mapDispatch)(withRouter(CamAggregator));
