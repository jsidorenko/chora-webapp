import store from '../index'
import * as actions from '../constants/actions'
import { choraTech } from '../contracts'

// getInstance

export const getInstance = () => ({
  type: actions.APP_GET_INSTANCE,
  payload: choraTech.then(instance => {
    store.dispatch(getInstanceSuccess(instance))
  }).catch(error => {
    store.dispatch(getInstanceError(error))
  }),
})

export const getInstanceError = (error) => ({
  type: actions.APP_GET_INSTANCE_ERROR,
  payload: error,
})

export const getInstanceSuccess = (instance) => ({
  type: actions.APP_GET_INSTANCE_SUCCESS,
  payload: instance,
})
