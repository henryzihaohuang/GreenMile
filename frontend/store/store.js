import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

const configureStore = (preloadedState = {}) => {

    const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk));

    return store;

}

export default configureStore;