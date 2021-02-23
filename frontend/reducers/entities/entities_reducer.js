import { combineReducers } from 'redux';
import sessionReducer from '../session/session_reducer';
import stocksReducer from '../stocks/stocks_reducer';
import newsReducer from '../news/news_reducer';

const entitiesReducer = combineReducers({
    session: sessionReducer,
    stock: stocksReducer,
    news: newsReducer
})

export default entitiesReducer;
