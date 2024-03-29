

const sandbox_key = window.cloudAPIKey;



export const fetchCompany = (abbreviation) => {

    const key = "Tsk_6488ea780c834facbb5e1124dd77e34a";
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

// testing
export const fetchCompanyNews = (abbreviation) => {
    // debugger
    const key = "Tsk_6488ea780c834facbb5e1124dd77e34a";
    return $.ajax({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/stock/${abbreviation}/news?token=${key}`
    })
}

//production
// export const fetchCompanyNews = (abbreviation) => {
//     // debugger
//     const key = " ";
//     return $.ajax({
//         method: "GET",
//         url: `https://cloud.iexapis.com/stable/stock/${abbreviation}/news?token=${key}`
//     })
// }

// sandbox
export const fetchSearch = (abbreviation) => {
    const key = "Tsk_6488ea780c834facbb5e1124dd77e34a";
    return $.ajax({
        method: 'GET',
        url: `https://sandbox.iexapis.com/stable/search/${abbreviation}?token=${key}`
    })
}

// export const fetchSearch = (abbreviation) => {
//     const key = "pk_a93aad99b56b4f458cfe19b26d8149c3";
//     debugger
//     return $.ajax({
//         method: 'GET',
//         url: `https://cloud.iexapis.com/stable/search/${abbreviation}?token=${key}`
//     })
// }