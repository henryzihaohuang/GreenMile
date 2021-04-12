import {connect} from 'react-redux';
import Homepage from './homepage';
import {openModal} from '../../actions/modal';

const mDtP = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal))
    }
};

export default connect(null, mDtP)(Homepage);
