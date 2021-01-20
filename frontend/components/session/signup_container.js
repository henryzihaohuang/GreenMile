import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from '../signup';

const mDtP = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser))
});

export default connect(null, mDtP)(Signup);