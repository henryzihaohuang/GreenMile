import { connect } from 'react-redux';
import FooterDisclosure from './footer_disclosure';

import { closeModal } from '../../actions/modal';

const mStP = (state, ownProps) => {

}

const mDtP = (dispatch) => {
    closeModal: () => dispatch(closeModal());
};

export default connect(mStP, mDtP)(FooterDisclosure);