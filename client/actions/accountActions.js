import store from '../index'
import * as actions from '../constants/actions'
import { organizations } from '../contracts'

// checkOrganizationsOwner

export const checkOrganizationsOwner = (account) => ({
  type: actions.ACCOUNT_CHECK_ORGANIZATIONS_OWNER,
  payload: organizations.deployed().then(instance => (
    instance.checkOrganizationsOwner(account)
  )).then(response => {
    store.dispatch(checkOrganizationsOwnerSuccess(response))
  }).catch(error => {
    store.dispatch(checkOrganizationsOwnerError(error))
  }),
})

export const checkOrganizationsOwnerError = (error) => ({
  type: actions.ACCOUNT_CHECK_ORGANIZATIONS_OWNER_ERROR,
  payload: error,
})

export const checkOrganizationsOwnerSuccess = (response) => ({
  type: actions.ACCOUNT_CHECK_ORGANIZATIONS_OWNER_SUCCESS,
  payload: response,
})

// getAccountOrganizations

export const getAccountOrganizations = (account) => ({
  type: actions.ACCOUNT_GET_ORGANIZATIONS,
  payload: organizations.deployed().then(instance => (
    instance.getAccountOrganizations(account)
  )).then(response => {
    store.dispatch(getAccountOrganizationsSuccess(response))
  }).catch(error => {
    store.dispatch(getAccountOrganizationsError(error))
  }),
})

export const getAccountOrganizationsError = (error) => ({
  type: actions.ACCOUNT_GET_ORGANIZATIONS_ERROR,
  payload: error,
})

export const getAccountOrganizationsSuccess = (response) => ({
  type: actions.ACCOUNT_GET_ORGANIZATIONS_SUCCESS,
  payload: response,
})
