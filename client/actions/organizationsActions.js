import store from '../index'
import * as actions from '../constants/actions'
import { organizations } from '../contracts'

// createOrganization

export const createOrganization = (organizationName, sender) => ({
  type: actions.ORGANIZATIONS_CREATE_ORGANIZATION,
  payload: organizations.deployed().then(instance => {
    return instance.createOrganization(organizationName, sender, { from: sender })
  }).then(response => {
    store.dispatch(createOrganizationSuccess(response))
  }).catch(error => {
    store.dispatch(createOrganizationError(error))
  }),
})

export const createOrganizationError = (error) => ({
  type: actions.ORGANIZATIONS_CREATE_ORGANIZATION_ERROR,
  payload: error,
})

export const createOrganizationSuccess = (response) => ({
  type: actions.ORGANIZATIONS_CREATE_ORGANIZATION_SUCCESS,
  payload: response,
})

// deleteOrganization

export const deleteOrganization = (organizationAddress, sender) => ({
  type: actions.ORGANIZATIONS_DELETE_ORGANIZATION,
  payload: organizations.deployed().then(instance => {
    return instance.deleteOrganization(organizationAddress, { from: sender })
  }).then(response => {
    store.dispatch(deleteOrganizationSuccess(response))
  }).catch(error => {
    store.dispatch(deleteOrganizationError(error))
  }),
})

export const deleteOrganizationError = (error) => ({
  type: actions.ORGANIZATIONS_DELETE_ORGANIZATION_ERROR,
  payload: error,
})

export const deleteOrganizationSuccess = (response) => ({
  type: actions.ORGANIZATIONS_DELETE_ORGANIZATION_SUCCESS,
  payload: response,
})

// getOrganizations

export const getOrganizations = (address) => ({
  type: actions.ORGANIZATIONS_GET_ORGANIZATIONS,
  payload: organizations.deployed().then(instance => {
    return instance.getOrganizations(address)
  }).then(response => {
    store.dispatch(getOrganizationsSuccess(response))
  }).catch(error => {
    store.dispatch(getOrganizationsError(error))
  }),
})

export const getOrganizationsError = (error) => ({
  type: actions.ORGANIZATIONS_GET_ORGANIZATIONS_ERROR,
  payload: error,
})

export const getOrganizationsSuccess = (response) => ({
  type: actions.ORGANIZATIONS_GET_ORGANIZATIONS_SUCCESS,
  payload: response,
})
