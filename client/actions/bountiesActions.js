import store from '../index'
import * as actions from '../constants/actions'
import { bounty } from '../contracts'

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
