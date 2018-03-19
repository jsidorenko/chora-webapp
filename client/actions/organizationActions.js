import store from '../index'
import * as actions from '../constants/actions'
import { organization, organizations } from '../contracts'

// createBounty

export const createBounty = (organizationAddress, newBounty, sender) => ({
  type: actions.ORGANIZATION_CREATE_BOUNTY,
  payload: organization.at(organizationAddress).then(instance => {
    return instance.createBounty(newBounty.description, newBounty.ether, newBounty.name, sender, { from: sender })
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

export const deleteBounty = (organizationAddress, address, sender) => ({
  type: actions.ORGANIZATION_DELETE_BOUNTY,
  payload: organization.at(organizationAddress).then(instance => {
    return instance.deleteBounty(address, sender, { from: sender })
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

// getAccount

export const getAccount = (organizationAddress) => ({
  type: actions.ORGANIZATION_GET_ACCOUNT,
  payload: organization.at(organizationAddress).then(instance => {
    return instance.getAccount()
  }).then(response => {
    store.dispatch(getAccountSuccess(response))
  }).catch(error => {
    store.dispatch(getAccountError(error))
  }),
})

export const getAccountError = (error) => ({
  type: actions.ORGANIZATION_GET_ACCOUNT_ERROR,
  payload: error,
})

export const getAccountSuccess = (response) => ({
  type: actions.ORGANIZATION_GET_ACCOUNT_SUCCESS,
  payload: response,
})

// getContributor

export const getContributor = (organizationAddress, address) => ({
  type: actions.ORGANIZATION_GET_CONTRIBUTOR,
  payload: organization.at(organizationAddress).then(instance => {
    return instance.getContributor(address)
  }).then(response => {
    store.dispatch(getContributorSuccess(response))
  }).catch(error => {
    store.dispatch(getContributorError(error))
  }),
})

export const getContributorError = (error) => ({
  type: actions.ORGANIZATION_GET_CONTRIBUTOR_ERROR,
  payload: error,
})

export const getContributorSuccess = (response) => ({
  type: actions.ORGANIZATION_GET_CONTRIBUTOR_SUCCESS,
  payload: response,
})

// getOrganization

export const getOrganization = (organizationAddress) => ({
  type: actions.ORGANIZATION_GET_ORGANIZATION,
  payload: organization.at(organizationAddress).then(instance => {
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

// getTransactions

export const getTransactions = (organizationAddress) => ({
  type: actions.ORGANIZATION_GET_TRANSACTIONS,
  payload: organization.at(organizationAddress).then(instance => {
    instance.OrganizationBountyCreated({}, { fromBlock: 0, toBlock: 'pending' }, (error, result) => {
      if (error) {
        store.dispatch(getTransactionsError(error))
      } else {
        store.dispatch(getTransactionsSuccess(result[0] ? result : [result]))
      }
    })
    instance.OrganizationBountyDeleted({}, { fromBlock: 0, toBlock: 'pending' }, (error, result) => {
      if (error) {
        store.dispatch(getTransactionsError(error))
      } else {
        store.dispatch(getTransactionsSuccess(result[0] ? result : [result]))
      }
    })
    instance.OrganizationUpdated({}, { fromBlock: 0, toBlock: 'pending' }, (error, result) => {
      if (error) {
        store.dispatch(getTransactionsError(error))
      } else {
        store.dispatch(getTransactionsSuccess(result[0] ? result : [result]))
      }
    })
  }),
})

export const getTransactionsError = (error) => ({
  type: actions.ORGANIZATION_GET_TRANSACTIONS_ERROR,
  payload: error
})

export const getTransactionsSuccess = (response) => ({
  type: actions.ORGANIZATION_GET_TRANSACTIONS_SUCCESS,
  payload: response
})

// resetOrganization

export const resetOrganization = () => ({
  type: actions.ORGANIZATION_RESET_ORGANIZATION,
})
