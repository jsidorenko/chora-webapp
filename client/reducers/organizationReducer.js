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
          accountBalance: action.payload[0].c[0],
          balance: action.payload[1].c[0],
          contributors: action.payload[2],
          name: action.payload[3],
          owner: action.payload[4],
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
