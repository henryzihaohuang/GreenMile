import { combineReducers } from 'redux';
import stocksReducer from '../stocks/stocks_reducer';
import newsReducer from '../news/news_reducer';

const entitiesReducer = combineReducers({
    stock: stocksReducer,
    news: newsReducer,
})

export default entitiesReducer;
