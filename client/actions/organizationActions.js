import store from '../index'
import * as actions from '../constants/actions'
import { organization } from '../contracts'

// createBounty

export const createBounty = (organizationName, sender) => ({
  type: actions.ORGANIZATION_CREATE_BOUNTY,
  payload: organization.deployed().then(instance => {
    return instance.createBounty(organizationName, sender, { from: sender })
  }).then(response => {
    store.dispatch(createBountySuccess(response))
  }).catch(error => {
    store.dispatch(createBountyError(error))
  }),
})

export const createBountyError = (error) => ({
  type: actions.ORGANIZATION_CREATE_BOUNTY_ERROR,
  payload: error,
})

export const createBountySuccess = (response) => ({
  type: actions.ORGANIZATION_CREATE_BOUNTY_SUCCESS,
  payload: response,
})

// deleteBounty

export const deleteBounty = (organizationAddress, organizationOwner, sender) => ({
  type: actions.ORGANIZATION_DELETE_BOUNTY,
  payload: organization.deployed().then(instance => {
    return instance.deleteBounty(organizationAddress, organizationOwner, { from: sender })
  }).then(response => {
    store.dispatch(deleteBountySuccess(response))
  }).catch(error => {
    store.dispatch(deleteBountyError(error))
  }),
})

export const deleteBountyError = (error) => ({
  type: actions.ORGANIZATION_DELETE_BOUNTY_ERROR,
  payload: error,
})

export const deleteBountySuccess = (response) => ({
  type: actions.ORGANIZATION_DELETE_BOUNTY_SUCCESS,
  payload: response,
})

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
