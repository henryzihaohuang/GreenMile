import * as DepositAPIUtil from '../utils/deposit_util';
export const UPDATE_BALANCE = 'UPDATE_BALANCE';

const updateBalance = (deposit) => {
    debugger
    return {
        type: UPDATE_BALANCE,
        deposit
    }
}

export const addDeposit = (amount, userId) => dispatch => {
    debugger
    return DepositAPIUtil.addDeposit(amount, userId)
        .then((data) => (dispatch(updateBalance(data))))
};
