import store from '../index'
import * as actions from '../constants/actions'
import { account } from '../contracts'

// getAccount

export const getAccount = () => ({
  type: actions.USER_GET_ACCOUNT,
  payload: account.then(instance => {
    return instance.getAccount()
  }).then(response => {
    store.dispatch(getAccountSuccess(response))
  }).catch(error => {
    store.dispatch(getAccountError(error))
  }),
})

export const getAccountError = (error) => ({
  type: actions.USER_GET_ACCOUNT_ERROR,
  payload: error,
})

export const getAccountSuccess = (response) => ({
  type: actions.USER_GET_ACCOUNT_SUCCESS,
  payload: response,
})
