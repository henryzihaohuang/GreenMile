import { connect } from 'react-redux';
import FooterDisclosure from './footer_disclosure';
import { closeModal } from '../../actions/modal';

const mDtP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(null, mDtP)(FooterDisclosure);