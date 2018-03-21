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
          description: action.payload[0],
          name: action.payload[2],
          owner: action.payload[3],
        }],
      }

    default:
      return state

  }
}

export default projectsReducer
