import {connect} from 'react-redux';
import FirstDisclosure from './first_disclosure';
import { closeModal } from '../../actions/modal';

const mDtP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(null, mDtP)(FirstDisclosure);