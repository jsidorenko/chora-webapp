import store from '../index'
import * as actions from '../constants/actions'
import { organization } from '../contracts'

// getOrganization

export const getOrganization = (address) => ({
  type: actions.ORGANIZATION_GET_ORGANIZATION,
  payload: organization.then(instance => {
    return instance.getOrganization(address)
  }).then(response => {
    store.dispatch(getOrganizationSuccess(response))
  }).catch(error => {
    store.dispatch(getOrganizationError(error))
  }),
})

export const getOrganizationError = (error) => ({
  type: actions.ORGANIZATION_GET_ORGANIZATION_ERROR,
  payload: error,
})

export const getOrganizationSuccess = (response) => ({
  type: actions.ORGANIZATION_GET_ORGANIZATION_SUCCESS,
  payload: response,
})

// resetOrganization

export const resetOrganization = () => ({
  type: actions.ORGANIZATION_RESET_ORGANIZATION,
})

// setOrganization

export const setOrganization = (address) => ({
  type: actions.ORGANIZATION_SET_ORGANIZATION,
  payload: address,
})
