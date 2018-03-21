import store from '../index'
import * as actions from '../constants/actions'
import { project } from '../contracts'

// getProject

export const getProject = (address) => ({
  type: actions.PROJECTS_GET_PROJECT,
  payload: project.at(address).then(instance => {
    return instance.getProject()
  }).then(response => {
    store.dispatch(getProjectSuccess(response))
  }).catch(error => {
    store.dispatch(getProjectError(error))
  }),
})

export const getProjectError = (error) => ({
  type: actions.PROJECTS_GET_PROJECT_ERROR,
  payload: error,
})

export const getProjectSuccess = (response) => ({
  type: actions.PROJECTS_GET_PROJECT_SUCCESS,
  payload: response,
})
