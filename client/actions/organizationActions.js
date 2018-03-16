import store from '../index'
import * as actions from '../constants/actions'
import { organization } from '../contracts'

// getOrganization

export const getOrganization = (address) => ({
  type: actions.ORGANIZATION_GET_ORGANIZATION,
  payload: organization.at(address).then(instance => {
    return instance.getOrganization()
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
