import * as actions from '../constants/actions'

const initialState = {

  // selectedOrganization
  selectedOrganization: null,

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
          name: action.payload[0],
          owner: action.payload[1],
          members: action.payload[2],
        },
        organizationLoading: false,
      }

    // resetOrganization

    case actions.ORGANIZATION_RESET_ORGANIZATION:
      return {
        ...state,
        selectedOrganization: null,
        organization: null,
        organizationError: null,
        organizationLoading: true,
      }

    // setOrganization

    case actions.ORGANIZATION_SET_ORGANIZATION:
      return {
        ...state,
        selectedOrganization: action.payload,
      }

    default:
      return state

  }
}

export default organizationReducer
