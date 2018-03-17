import store from '../index'
import * as actions from '../constants/actions'
import { bounty } from '../contracts'

// claimBounty

export const claimBounty = (address, sender) => ({
  type: actions.BOUNTIES_CLAIM_BOUNTY,
  payload: bounty.at(address).then(instance => {
    return instance.claimBounty({ from: sender })
  }).then(response => {
    store.dispatch(claimBountySuccess(response))
  }).catch(error => {
    store.dispatch(claimBountyError(error))
  }),
})

export const claimBountyError = (error) => ({
  type: actions.BOUNTIES_CLAIM_BOUNTY_ERROR,
  payload: error,
})

export const claimBountySuccess = (response) => ({
  type: actions.BOUNTIES_CLAIM_BOUNTY_SUCCESS,
  payload: response,
})

// getBounty

export const getBounty = (address) => ({
  type: actions.BOUNTIES_GET_BOUNTY,
  payload: bounty.at(address).then(instance => {
    return instance.getBounty()
  }).then(response => {
    store.dispatch(getBountySuccess(response))
  }).catch(error => {
    store.dispatch(getBountyError(error))
  }),
})

export const getBountyError = (error) => ({
  type: actions.BOUNTIES_GET_BOUNTY_ERROR,
  payload: error,
})

export const getBountySuccess = (response) => ({
  type: actions.BOUNTIES_GET_BOUNTY_SUCCESS,
  payload: response,
})

// submitWork

export const submitWork = (address, sender) => ({
  type: actions.BOUNTIES_SUBMIT_WORK,
  payload: bounty.at(address).then(instance => {
    return instance.submitWork({ from: sender })
  }).then(response => {
    store.dispatch(submitWorkSuccess(response))
  }).catch(error => {
    store.dispatch(submitWorkError(error))
  }),
})

export const submitWorkError = (error) => ({
  type: actions.BOUNTIES_SUBMIT_WORK_ERROR,
  payload: error,
})

export const submitWorkSuccess = (response) => ({
  type: actions.BOUNTIES_SUBMIT_WORK_SUCCESS,
  payload: response,
})
