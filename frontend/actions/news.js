import * as APIStockUtil from "../utils/stock_utils";

export const RECEIVE_NEWS = "RECEIVE_NEWS";

const receiveNews = (news) => {
    return {
        type: RECEIVE_NEWS,
        news
    }
}

export const fetchNews = (abbreviation) => {
    return (dispatch) => {
        return APIStockUtil.fetchCompanyNews(abbreviation)
            .then(
                (news) => dispatch(receiveNews(news)))
    }
}