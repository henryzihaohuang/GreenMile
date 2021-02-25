import { RECEIVE_NEWS } from '../../actions/news';

const newsReducer = (state = {}, action) => {
    Object.freeze(state);

    let nextState;
    nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_NEWS:
            return action.news;
            
        default:
            return state;
    }
};

export default newsReducer;