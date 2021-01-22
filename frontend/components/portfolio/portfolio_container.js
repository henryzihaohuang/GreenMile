import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import Portfolio from './portfolio';

const mStP = (state, ownProps) => {
    return {
        currentUser: state.entities.session.currentUser
    }
};

const mDtP = (dispatch) => {
    return {
        action: () => dispatch(logout())
    }
};

export default connect(mStP, mDtP)(Portfolio);
