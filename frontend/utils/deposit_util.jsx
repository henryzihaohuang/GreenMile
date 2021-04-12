export const addDeposit = (amount, userId) => {
    debugger
    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${userId}`,
        data: { amount }
    })
}

