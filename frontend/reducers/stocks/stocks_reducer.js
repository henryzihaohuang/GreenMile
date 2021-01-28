import {
    RECEIVE_COMPANY_INFO,
    RECEIVE_INTRADAY_INFO,
    RECEIVE_PRICE_HISTORY
} from '../../actions/stock';


const stocksReducer = (state= {}, action) => {
    Object.freeze(state);

    let nextState;
    nextState = Object.assign({}, state);
    
    switch(action.type) {

   	case RECEIVE_COMPANY_INFO:
            nextState['company'] = action.company;
            return nextState;

        case RECEIVE_INTRADAY_INFO:
           
            nextState['prices'] = action.prices;
            return nextState;

        case RECEIVE_PRICE_HISTORY:
            nextState['prices'] = action.prices;
            return nextState;

        default:
            return state;
    }
};

export default stocksReducer;