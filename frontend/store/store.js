import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const configureStore = (preloadedState = {}) => {

    const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));

    return store;

}

export default configureStore;