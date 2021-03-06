import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../../actions/session';


const sessionErrorReducer = (state = [], action) => {
    // debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            // debugger
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
}

export default sessionErrorReducer;