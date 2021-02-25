import { connect } from 'react-redux';
import { fetchPriceHistory,
         fetchCompanyInfo } from '../../actions/stock';
import StocksShow from "./stocks_show";

const mStP = (state, ownProps) => {
    return {
        entities: state.entities
    }
};

const mDtP = (dispatch) => {
    return {
        fetchHistory: (abbreviation, timeRange) => dispatch(fetchPriceHistory(abbreviation, timeRange)),
        fetchCompany: (abbreviation) => dispatch(fetchCompanyInfo(abbreviation))
    }
};

export default connect(mStP, mDtP)(StocksShow);