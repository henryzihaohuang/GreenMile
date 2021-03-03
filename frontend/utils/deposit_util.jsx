export const addDeposit = (amount, userId) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${userId}`,
        data: { amount }
    })
}

