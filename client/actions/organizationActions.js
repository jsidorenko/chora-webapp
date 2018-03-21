import store from '../index'
import * as actions from '../constants/actions'
import { organization, organizations } from '../contracts'

// createBallot

export const createBallot = (organizationAddress, newBallot, sender) => ({
  type: actions.ORGANIZATION_CREATE_BALLOT,
  payload: organization.at(organizationAddress).then(instance => {
    return instance.createBallot(newBallot.name, sender, { from: sender })
  }).then(response => {
    store.dispatch(createBallotSuccess(response))
  }).catch(error => {
    store.dispatch(createBallotError(error))
  }),
})

export const createBallotError = (error) => ({
  type: actions.ORGANIZATION_CREATE_BALLOT_ERROR,
  payload: error,
})

export const createBallotSuccess = (response) => ({
  type: actions.ORGANIZATION_CREATE_BALLOT_SUCCESS,
  payload: response,
})

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

// createProject

export const createProject = (organizationAddress, newProject, sender) => ({
  type: actions.ORGANIZATION_CREATE_PROJECT,
  payload: organization.at(organizationAddress).then(instance => {
    return instance.createProject(newProject.name, sender, { from: sender })
  }).then(response => {
    store.dispatch(createProjectSuccess(response))
  }).catch(error => {
    store.dispatch(createProjectError(error))
  }),
})

export const createProjectError = (error) => ({
  type: actions.ORGANIZATION_CREATE_PROJECT_ERROR,
  payload: error,
})

export const createProjectSuccess = (response) => ({
  type: actions.ORGANIZATION_CREATE_PROJECT_SUCCESS,
  payload: response,
})

// deleteBallot

export const deleteBallot = (organizationAddress, bountyAddress, sender) => ({
  type: actions.ORGANIZATION_DELETE_BALLOT,
  payload: organization.at(organizationAddress).then(instance => {
    return instance.deleteBallot(bountyAddress, sender, { from: sender })
  }).then(response => {
    store.dispatch(deleteBallotSuccess(response))
  }).catch(error => {
    store.dispatch(deleteBallotError(error))
  }),
})

export const deleteBallotError = (error) => ({
  type: actions.ORGANIZATION_DELETE_BALLOT_ERROR,
  payload: error,
})

export const deleteBallotSuccess = (response) => ({
  type: actions.ORGANIZATION_DELETE_BALLOT_SUCCESS,
  payload: response,
})

// deleteBounty

export const deleteBounty = (organizationAddress, bountyAddress, sender) => ({
  type: actions.ORGANIZATION_DELETE_BOUNTY,
  payload: organization.at(organizationAddress).then(instance => {
    return instance.deleteBounty(bountyAddress, sender, { from: sender })
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

// deleteProject

export const deleteProject = (organizationAddress, bountyAddress, sender) => ({
  type: actions.ORGANIZATION_DELETE_PROJECT,
  payload: organization.at(organizationAddress).then(instance => {
    return instance.deleteProject(bountyAddress, sender, { from: sender })
  }).then(response => {
    store.dispatch(deleteProjectSuccess(response))
  }).catch(error => {
    store.dispatch(deleteProjectError(error))
  }),
})

export const deleteProjectError = (error) => ({
  type: actions.ORGANIZATION_DELETE_PROJECT_ERROR,
  payload: error,
})

export const deleteProjectSuccess = (response) => ({
  type: actions.ORGANIZATION_DELETE_PROJECT_SUCCESS,
  payload: response,
})

// getAccount

export const getAccount = (organizationAddress, contributorAddress) => ({
  type: actions.ORGANIZATION_GET_ACCOUNT,
  payload: organization.at(organizationAddress).then(instance => {
    return instance.getContributor(contributorAddress)
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

export const getContributor = (organizationAddress, contributorAddress) => ({
  type: actions.ORGANIZATION_GET_CONTRIBUTOR,
  payload: organization.at(organizationAddress).then(instance => {
    return instance.getContributor(contributorAddress)
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
    instance.BallotCreated({}, { fromBlock: 0, toBlock: 'pending' }, (error, result) => {
      if (error) {
        store.dispatch(getTransactionsError(error))
      } else {
        store.dispatch(getTransactionsSuccess(result[0] ? result : [result]))
      }
    })
    instance.BallotDeleted({}, { fromBlock: 0, toBlock: 'pending' }, (error, result) => {
      if (error) {
        store.dispatch(getTransactionsError(error))
      } else {
        store.dispatch(getTransactionsSuccess(result[0] ? result : [result]))
      }
    })
    instance.BountyCreated({}, { fromBlock: 0, toBlock: 'pending' }, (error, result) => {
      if (error) {
        store.dispatch(getTransactionsError(error))
      } else {
        store.dispatch(getTransactionsSuccess(result[0] ? result : [result]))
      }
    })
    instance.BountyDeleted({}, { fromBlock: 0, toBlock: 'pending' }, (error, result) => {
      if (error) {
        store.dispatch(getTransactionsError(error))
      } else {
        store.dispatch(getTransactionsSuccess(result[0] ? result : [result]))
      }
    })
    instance.ProjectCreated({}, { fromBlock: 0, toBlock: 'pending' }, (error, result) => {
      if (error) {
        store.dispatch(getTransactionsError(error))
      } else {
        store.dispatch(getTransactionsSuccess(result[0] ? result : [result]))
      }
    })
    instance.ProjectDeleted({}, { fromBlock: 0, toBlock: 'pending' }, (error, result) => {
      if (error) {
        store.dispatch(getTransactionsError(error))
      } else {
        store.dispatch(getTransactionsSuccess(result[0] ? result : [result]))
      }
    })
    instance.OrganizationCreated({}, { fromBlock: 0, toBlock: 'pending' }, (error, result) => {
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
