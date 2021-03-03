import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import Portfolio from './portfolio';
import {
    fetchCompanyInfo,
    fetchPriceHistory,
    fetchIntradayInfo,
} from '../../actions/stock';
import { openModal } from '../../actions/modal';

const mStP = (state, ownProps) => {
    return {
        entities: state.entities,
        balance: state.transactions
    }
};

const mDtP = (dispatch) => {
    return {
        action: () => dispatch(logout()),
        fetchCompany: (abbreviation) => dispatch(fetchCompanyInfo(abbreviation)),
        fetchHistory: (abbreviation, timeRange) => dispatch(fetchPriceHistory(abbreviation, timeRange)),
        fetchIntradayInfo: (abbreviation) => dispatch(fetchIntradayInfo(abbreviation)),
        openModal: (modal) => dispatch(openModal(modal))
    }
};

export default connect(mStP, mDtP)(Portfolio);
