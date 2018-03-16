import * as actions from '../constants/actions'

const initialState = {

  // organization
  organizationError: null,
  organizationLoading: true,
  organizationSuccess: false,

  // organizations
  organizations: null,
  organizationsError: null,
  organizationsLoading: true,

}

const organizationsReducer = (state = initialState, action) => {
  switch (action.type) {

    // createOrganization

    case actions.ORGANIZATIONS_CREATE_ORGANIZATION:
      return {
        ...state,
        organizationError: null,
        organizationLoading: true,
        organizationSuccess: false,
      }

    case actions.ORGANIZATIONS_CREATE_ORGANIZATION_ERROR:
      return {
        ...state,
        organizationError: action.payload,
        organizationLoading: false,
      }

    case actions.ORGANIZATIONS_CREATE_ORGANIZATION_SUCCESS:
      return {
        ...state,
        organizationLoading: false,
        organizationSuccess: action.payload,
      }

    // deleteOrganization

    case actions.ORGANIZATIONS_DELETE_ORGANIZATION:
      return {
        ...state,
        organizationError: null,
        organizationLoading: true,
        organizationSuccess: false,
      }

    case actions.ORGANIZATIONS_DELETE_ORGANIZATION_ERROR:
      return {
        ...state,
        organizationError: action.payload,
        organizationLoading: false,
      }

    case actions.ORGANIZATIONS_DELETE_ORGANIZATION_SUCCESS:
      return {
        ...state,
        organizationLoading: false,
        organizationSuccess: action.payload,
      }

    // getAccountOrganizations

    case actions.ORGANIZATIONS_GET_ORGANIZATIONS:
      return {
        ...state,
        organizationsError: null,
        organizationsLoading: true,
      }

    case actions.ORGANIZATIONS_GET_ORGANIZATIONS_ERROR:
      return {
        ...state,
        organizationsError: action.payload,
        organizationsLoading: false,
      }

    case actions.ORGANIZATIONS_GET_ORGANIZATIONS_SUCCESS:
      return {
        ...state,
        organizations: action.payload,
        organizationsLoading: false,
      }

    default:
      return state

  }
}

export default organizationsReducer
