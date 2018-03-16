import * as actions from '../constants/actions'

const initialState = {

  // organization
  organization: null,
  organizationError: null,
  organizationLoading: true,

}

const organizationReducer = (state = initialState, action) => {
  switch (action.type) {

    // getOrganization

    case actions.ORGANIZATION_GET_ORGANIZATION:
      return {
        ...state,
        organizationError: null,
        organizationLoading: true,
      }

    case actions.ORGANIZATION_GET_ORGANIZATION_ERROR:
      return {
        ...state,
        organizationError: action.payload,
        organizationLoading: false,
      }

    case actions.ORGANIZATION_GET_ORGANIZATION_SUCCESS:
      return {
        ...state,
        organization: {
          contributors: action.payload[0],
          name: action.payload[1],
          owner: action.payload[2],
          tokensAccount: action.payload[3].c[0],
          tokensTotal: action.payload[4].c[0],
        },
        organizationLoading: false,
      }

    // resetOrganization

    case actions.ORGANIZATION_RESET_ORGANIZATION:
      return {
        ...state,
        organization: null,
        organizationError: null,
        organizationLoading: true,
      }

    default:
      return state

  }
}

export default organizationReducer
