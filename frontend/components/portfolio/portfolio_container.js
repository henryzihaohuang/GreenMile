import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import Portfolio from './portfolio';

import {
    fetchCompanyInfo,
    fetchPriceHistory,
    fetchIntradayInfo,
} from '../../actions/stock';

import { fetchNews } from '../../actions/news'

const mStP = (state, ownProps) => {
    return {
        entities: state.entities
    }
};

const mDtP = (dispatch) => {
    return {
        action: () => dispatch(logout()),

        fetchCompany: (abbreviation) => dispatch(fetchCompanyInfo(abbreviation)),

        fetchHistory: (abbreviation, timeRange) => dispatch(fetchPriceHistory(abbreviation, timeRange)),

        fetchIntradayInfo: (abbreviation) => dispatch(fetchIntradayInfo(abbreviation)),

        fetchNews: (abbreviation) => dispatch(fetchNews(abbreviation))
    }
};

export default connect(mStP, mDtP)(Portfolio);
