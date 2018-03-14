import store from '../index'
import * as actions from '../constants/actions'
import { organizations } from '../contracts'

// getAccount

export const getAccount = (account) => ({
  type: actions.USER_GET_ACCOUNT,
  payload: organizations.deployed().then(instance => {
    return instance.getAccountOrganizations(account)
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
