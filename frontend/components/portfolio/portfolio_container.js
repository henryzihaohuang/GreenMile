import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import Portfolio from './portfolio';

import {
    fetchCompanyInfo,
    fetchPriceHistory,
    fetchIntradayInfo,
} from '../../actions/stock';

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
        fetchIntradayInfo: (abbreviation) => dispatch(fetchIntradayInfo(abbreviation))
    }
};

export default connect(mStP, mDtP)(Portfolio);
