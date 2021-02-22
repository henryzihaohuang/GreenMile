import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import Search from './search';

import {
} from '../../actions/stock';

const mStP = (state, ownProps) => {
    return {
        entities: state.entities
    }
};

const mDtP = (dispatch) => {
    return {
    }
};

export default connect(mStP, mDtP)(Portfolio);