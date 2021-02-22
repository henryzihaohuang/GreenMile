import { connect } from 'react-redux';
import { fetchCompanyInfo } from '../../actions/stock_actions';
import { StockInfo } from "./stocks";

const mStP = (state, ownProps) => {
    return {
        abbreviation: ownProps.match.params.abbreviation,
    }
};

const mDtP = (dispatch) => {
    return {
        fetchCompanyInfo: (abbreviation) => dispatch(fetchCompanyInfo(abbreviation))
    }
};

export default connect(mStP, mDtP)(StockInfo);