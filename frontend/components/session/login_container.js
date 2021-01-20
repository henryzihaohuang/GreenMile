import { connect } from 'react-redux';
import { login } from '../../actions/session';
import SessionForm from './session_form';

const mStP = (state, ownProps) => {
    // debugger
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
        action: (formUser) => dispatch(login(formUser))
    }  
};

export default connect(mStP, mDtP)(SessionForm)