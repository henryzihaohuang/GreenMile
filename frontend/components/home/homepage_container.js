import {connect} from 'react-redux';
import {logout} from '../../actions/session';
import Homepage from './homepage';
import {openModal} from '../../actions/modal';

const mStP = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser
    }
};

const mDtP = (dispatch) => {
    return {
        action: ()=> dispatch(logout()),
        openModal: (modal) => dispatch(openModal(modal))
    }
};

export default connect(mStP, mDtP)(Homepage);
