import * as APIStockUtil from "../utils/stock_utils";

export const RECEIVE_NEWS = "RECEIVE_NEWS";

const receiveNews = (news) => {
    // debugger
    return {
        type: RECEIVE_NEWS,
        news
    }
}

export const fetchNews = (abbreviation) => {
    // debugger
    return (dispatch) => {
        return APIStockUtil.fetchCompanyNews(abbreviation)
            .then(
                (news) => dispatch(receiveNews(news)))
    }
}