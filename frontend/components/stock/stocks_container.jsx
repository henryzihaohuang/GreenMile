import { connect } from 'react-redux';
import { fetchPriceHistory,
         fetchCompanyInfo,
         fetchIntradayInfo } from '../../actions/stock';
import StocksShow from "./stocks_show";
import { openModal } from '../../actions/modal';

const mStP = (state, ownProps) => {
    return {
        entities: state.entities
    }
};

const mDtP = (dispatch) => {
    return {
        fetchHistory: (abbreviation, timeRange) => dispatch(fetchPriceHistory(abbreviation, timeRange)),
        fetchCompany: (abbreviation) => dispatch(fetchCompanyInfo(abbreviation)),
        fetchIntradayInfo: (abbreviation) => dispatch(fetchIntradayInfo(abbreviation)),
        openModal: (modal) => dispatch(openModal(modal))

    }
};

export default connect(mStP, mDtP)(StocksShow);