import { postSession, postUser, deleteSession } from '../utils/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const signup = (formUser) => {
    // debugger
    return (dispatch) => {
        return postUser(formUser)
            .then((currentUser) => dispatch(receiveCurrentUser(currentUser)),
            (errors) => dispatch(receiveErrors(errors.responseJSON)));
    }
} 

export const login = (formUser) => {
    // debugger
    return (dispatch) => {
        return postSession(formUser)
            .then((currentUser)=> dispatch(receiveCurrentUser(currentUser)),
            (errors) => dispatch(receiveErrors(errors.responseJSON)));
    }
}

export const logout = () => {
    return (dispatch) => {
        return deleteSession()
        .then(() => dispatch(logoutCurrentUser()));
    }
}