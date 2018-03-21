import store from '../index'
import * as actions from '../constants/actions'
import { ballot } from '../contracts'

// getBallot

export const getBallot = (address) => ({
  type: actions.BALLOTS_GET_BALLOT,
  payload: ballot.at(address).then(instance => {
    return instance.getBallot()
  }).then(response => {
    store.dispatch(getBallotSuccess(response))
  }).catch(error => {
    store.dispatch(getBallotError(error))
  }),
})

export const getBallotError = (error) => ({
  type: actions.BALLOTS_GET_BALLOT_ERROR,
  payload: error,
})

export const getBallotSuccess = (response) => ({
  type: actions.BALLOTS_GET_BALLOT_SUCCESS,
  payload: response,
})
