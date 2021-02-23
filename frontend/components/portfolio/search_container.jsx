import { connect } from 'react-redux';
import Search from './search';
import {fetchSearch} from  '../../actions/stock';

const mStP = (state, ownProps) => {
    return {
    }
};

const mDtP = (dispatch) => {
    return {
        fetchSearch: (abbreviation) => dispatch(fetchSearch(abbreviation))
    }
};

export default connect(mStP, mDtP)(Search);