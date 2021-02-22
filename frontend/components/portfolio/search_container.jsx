import { connect } from 'react-redux';
import Search from './search';

import { fetchStocksAbbr
} from '../../actions/stock';

const mStP = (state, ownProps) => {
    return {
        stocks: state.entities.stocks.stocks
    }
};

const mDtP = (dispatch) => {
    return {
        fetchStocks: () => dispatch(fetchStocksAbbr())
    }
};

export default connect(mStP, mDtP)(Search);