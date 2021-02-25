import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import Navbar from './navbar';


const mStP = (state, ownProps) => {
    return {
    }
};

const mDtP = (dispatch) => {
    return {
        action: () => dispatch(logout())
    }
};

export default connect(null, mDtP)(Navbar);