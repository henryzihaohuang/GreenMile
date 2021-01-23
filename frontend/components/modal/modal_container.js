import Modal from './modal';
import { closeModal } from '../../actions/modal';
import { connect } from 'react-redux';

const mStP = (state, ownProps) => {
    debugger
    return {
        modal: state.ui.modal
    };
};

const mDtP = dispatch => {
    debugger
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mStP, mDtP)(Modal);
