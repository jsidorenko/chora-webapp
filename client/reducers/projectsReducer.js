import * as actions from '../constants/actions'

const initialState = {

  // projects
  projects: null,
  projectsError: null,

}

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {

    // getBallot

    case actions.PROJECTS_GET_PROJECT:
      return {
        ...state,
        projects: [],
        projectsError: null,
      }

    case actions.PROJECTS_GET_PROJECT_ERROR:
      return {
        ...state,
        projectsError: action.payload,
      }

    case actions.PROJECTS_GET_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [...state.projects, {
          name: action.payload[0],
          owner: action.payload[1],
        }],
      }

    default:
      return state

  }
}

export default projectsReducer
