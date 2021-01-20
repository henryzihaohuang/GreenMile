import { connect } from 'react-redux';
import { signup } from '../../actions/session';
import Signup from './signup';

const mDtP = dispatch => ({
    signup: formUser => dispatch(signup(formUser))
});

export default connect(null, mDtP)(Signup);