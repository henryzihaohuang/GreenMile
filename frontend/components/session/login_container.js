import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/session';
import SessionForm from './session_form';

const mStP = (state, ownProps) => {
    return {
        user: {
            email: "",
            password: ""
        },
        formType: 'login',
        errors: state.errors.session
    }
};

const mDtP = (dispatch) =>  {
    return {
        action: (formUser) => dispatch(login(formUser)),
        clearErrors: (errors) => dispatch(receiveErrors(errors))
    }  
};

export default connect(mStP, mDtP)(SessionForm)