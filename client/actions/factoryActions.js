import store from '../index'
import * as actions from '../constants/actions'
import { factory } from '../contracts'

// createOrganization

export const createOrganization = (name, owner) => ({
  type: actions.FACTORY_CREATE_ORGANIZATION,
  payload: factory.then(instance => {
    return instance.createOrganization(name, owner, { from: owner })
  }).then(response => {
    store.dispatch(createOrganizationSuccess(response))
  }).catch(error => {
    store.dispatch(createOrganizationError(error))
  }),
})

export const createOrganizationError = (error) => ({
  type: actions.FACTORY_CREATE_ORGANIZATION_ERROR,
  payload: error,
})

export const createOrganizationSuccess = (response) => ({
  type: actions.FACTORY_CREATE_ORGANIZATION_SUCCESS,
  payload: response,
})

// getOrganizations

export const getOrganizations = (address) => ({
  type: actions.FACTORY_GET_ORGANIZATIONS,
  payload: factory.then(instance => {
    return instance.getOrganizations(address)
  }).then(response => {
    store.dispatch(getOrganizationsSuccess(response))
  }).catch(error => {
    store.dispatch(getOrganizationsError(error))
  }),
})

export const getOrganizationsError = (error) => ({
  type: actions.FACTORY_GET_ORGANIZATIONS_ERROR,
  payload: error,
})

export const getOrganizationsSuccess = (response) => ({
  type: actions.FACTORY_GET_ORGANIZATIONS_SUCCESS,
  payload: response,
})
