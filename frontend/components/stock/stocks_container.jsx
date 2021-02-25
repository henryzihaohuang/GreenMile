import { connect } from 'react-redux';
import { fetchPriceHistory,
         fetchCompanyInfo,
         fetchIntradayInfo } from '../../actions/stock';
import StocksShow from "./stocks_show";

const mStP = (state, ownProps) => {
    debugger
    return {
        entities: state.entities
    }
};

const mDtP = (dispatch) => {
    return {
        fetchHistory: (abbreviation, timeRange) => dispatch(fetchPriceHistory(abbreviation, timeRange)),
        fetchCompany: (abbreviation) => dispatch(fetchCompanyInfo(abbreviation)),
        fetchIntradayInfo: (abbreviation) => dispatch(fetchIntradayInfo(abbreviation))

    }
};

export default connect(mStP, mDtP)(StocksShow);