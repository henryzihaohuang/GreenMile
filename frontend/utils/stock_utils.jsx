

const sandbox_key = window.cloudAPIKey;

export const fetchCompany = (abbreviation) => {

    const key = "Tsk_6488ea780c834facbb5e1124dd77e34a";
    // debugger
    return $.ajax ({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/stock/${abbreviation}/company?token=${key}`
    })
}

export const fetchIntradayInfo = (abbreviation) => {

    const key = "Tsk_6488ea780c834facbb5e1124dd77e34a";
    return $.ajax({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${abbreviation}&types=intraday-prices&token=${key}`
    })
}

export const fetchPriceHistory = (abbreviation, timeRange) => {
    // debugger
    const key = "Tsk_6488ea780c834facbb5e1124dd77e34a";
    return $.ajax({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${abbreviation}&types=chart&range=${timeRange}&includeToday=true&token=${key}`
    })
}


export const fetchCompanyNews = (abbreviation) => {
    // debugger
    const key = "pk_96d66ea070a04293b36c118fd600f0d5 ";
    return $.ajax({
        method: "GET",
        url: `https://cloud.iexapis.com/stable/stock/${abbreviation}/news?token=${key}`
    })
}