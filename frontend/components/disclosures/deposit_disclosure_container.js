import {connect} from 'react-redux';
import DepositDisclosure from './deposit_disclosure';
import { addDeposit } from '../../actions/deposit';
import { closeModal } from '../../actions/modal';

const mStP = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser.id
    }
}

const mDtP = dispatch => {
    debugger
    return {
        closeModal: () => dispatch(closeModal()),
        addDeposit: (amount, userId) => dispatch(addDeposit(amount, userId))
    };

};

export default connect(mStP, mDtP)(DepositDisclosure)