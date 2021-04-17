import { connect } from 'react-redux';
import { signup, receiveErrors } from '../../actions/session';
import SessionForm from './session_form';

const mStP = (state, ownProps) => {
    return {
        user: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        },
        formType: 'signup',
        errors: state.errors.session
    }

};

const mDtP = dispatch => ({
    action: formUser => dispatch(signup(formUser)),
    clearErrors: (errors) => dispatch(receiveErrors(errors))
});

export default connect(mStP, mDtP)(SessionForm);