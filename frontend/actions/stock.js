import * as APIStockUtil from "../utils/stock_utils";

export const RECEIVE_COMPANY_INFO = "RECEIVE_COMPANY_INFO ";
export const RECEIVE_INTRADAY_INFO = "RECEIVE_INTRADAY_INFO";
export const RECEIVE_PRICE_HISTORY = "RECEIVE_PRICE_HISTORY";
export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

const receiveCompany = (company, abbr) => {
    return {
        type: RECEIVE_COMPANY_INFO,
        company,
        abbr
    }
}

const receiveIntraday = (abbr, prices) => {
    return {
        type: RECEIVE_INTRADAY_INFO,
        abbr,
        prices
    }
}

const receiveHistory = (abbr, prices) => {
    return {
        type: RECEIVE_PRICE_HISTORY,
        abbr,
        prices
    }
}

const receiveSearchResults = (abbr) => {
    debugger
    return {
        type: RECEIVE_SEARCH_RESULTS,
        abbr
    }
}


export const fetchCompanyInfo = (abbreviation) => {
    return (dispatch) => {
        return APIStockUtil.fetchCompany(abbreviation)
            .then(
                (companyData) => dispatch(receiveCompany(companyData, abbreviation)))
    }
}

export const fetchIntradayInfo = (abbreviation) => {
    return (dispatch) => {
        return APIStockUtil.fetchIntradayInfo(abbreviation)
            .then(
                (priceData) => {
                    return dispatch(receiveIntraday(abbreviation, priceData))}
                    )
    }
}

export const fetchPriceHistory = (abbreviation, timeRange) => {
    return (dispatch) => {
        return APIStockUtil.fetchPriceHistory(abbreviation, timeRange)
            .then(
                (priceData) => dispatch(receiveHistory(abbreviation, priceData)))
    }
}

export const fetchSearch = (abbreviation) => {
    return (dispatch) => {
        return APIStockUtil.fetchSearch(abbreviation)
            .then(
                (abbr) => dispatch(receiveSearchResults(abbr)))
    }   
}