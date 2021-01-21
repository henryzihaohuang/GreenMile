import { connect } from 'react-redux';
import { signup } from '../../actions/session';
import SessionForm from './session_form';

const mStP = (state, ownProps) => {
    // debugger
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
    action: formUser => dispatch(signup(formUser))
});

export default connect(mStP, mDtP)(SessionForm);