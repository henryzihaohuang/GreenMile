import { postSession, postUser, deleteSession } from '../utils/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const signup = formUser => {
    return (dispatch) => {
        return (postUser(formUser)
        .then(user => dispatch(receiveCurrentUser(user))),
        errors => dispatch(receiveErrors(errors)));
    }
} 

export const login = formUser => {
    return (dispatch) => {
        return (postSession(formUser)
        .then(user => dispatch(receiveCurrentUser(user))));
    }
}

export const logout = () => {
    return (dispatch) => {
        return (deleteSession()
        .then(() => dispatch(logoutCurrentUser())));
    }
}