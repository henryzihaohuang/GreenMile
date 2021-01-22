import { combineReducers } from 'redux';
import sessionReducer from '../session/session_reducer';

const entitiesReducer = combineReducers({
    session: sessionReducer
})

export default entitiesReducer;