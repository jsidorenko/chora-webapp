import * as actions from '../constants/actions'

const initialState = {

  // accountOrganizations
  accountOrganizations: null,
  accountOrganizationsError: null,
  accountOrganizationsLoading: true,

  // createOrganization
  createOrganizationError: null,
  createOrganizationLoading: true,
  createOrganizationSuccess: false,

  // deleteOrganization
  deleteOrganizationError: null,
  deleteOrganizationLoading: true,
  deleteOrganizationSuccess: false,

  // organizations
  organizations: null,
  organizationsError: null,
  organizationsLoading: true,

  // organizationsOwner
  organizationsOwner: null,
  organizationsOwnerError: null,
  organizationsOwnerLoading: true,

}

const organizationsReducer = (state = initialState, action) => {
  switch (action.type) {

    // createOrganization

    case actions.ORGANIZATIONS_CREATE_ORGANIZATION:
      return {
        ...state,
        createOrganizationError: null,
        createOrganizationLoading: true,
        createOrganizationSuccess: false,
      }

    case actions.ORGANIZATIONS_CREATE_ORGANIZATION_ERROR:
      return {
        ...state,
        createOrganizationError: action.payload,
        createOrganizationLoading: false,
      }

    case actions.ORGANIZATIONS_CREATE_ORGANIZATION_SUCCESS:
      return {
        ...state,
        createOrganizationLoading: false,
        createOrganizationSuccess: action.payload,
      }

    // deleteOrganization

    case actions.ORGANIZATIONS_DELETE_ORGANIZATION:
      return {
        ...state,
        deleteOrganizationError: null,
        deleteOrganizationLoading: true,
        deleteOrganizationSuccess: false,
      }

    case actions.ORGANIZATIONS_DELETE_ORGANIZATION_ERROR:
      return {
        ...state,
        deleteOrganizationError: action.payload,
        deleteOrganizationLoading: false,
      }

    case actions.ORGANIZATIONS_DELETE_ORGANIZATION_SUCCESS:
      return {
        ...state,
        deleteOrganizationLoading: false,
        deleteOrganizationSuccess: action.payload,
      }

    // getAccountOrganizations

    case actions.ORGANIZATIONS_GET_ACCOUNT_ORGANIZATIONS:
      return {
        ...state,
        accountOrganizationsError: null,
        accountOrganizationsLoading: true,
      }

    case actions.ORGANIZATIONS_GET_ACCOUNT_ORGANIZATIONS_ERROR:
      return {
        ...state,
        accountOrganizationsError: action.payload,
        accountOrganizationsLoading: false,
      }

    case actions.ORGANIZATIONS_GET_ACCOUNT_ORGANIZATIONS_SUCCESS:
      return {
        ...state,
        accountOrganizations: action.payload,
        accountOrganizationsLoading: false,
      }

    // getOrganizations

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

    // getOrganizationsOwner

    case actions.ORGANIZATIONS_GET_ORGANIZATIONS_OWNER:
      return {
        ...state,
        organizationsOwnerError: null,
        organizationsOwnerLoading: true,
      }

    case actions.ORGANIZATIONS_GET_ORGANIZATIONS_OWNER_ERROR:
      return {
        ...state,
        organizationsOwnerError: action.payload,
        organizationsOwnerLoading: false,
      }

    case actions.ORGANIZATIONS_GET_ORGANIZATIONS_OWNER_SUCCESS:
      return {
        ...state,
        organizationsOwner: action.payload,
        organizationsOwnerLoading: false,
      }

    default:
      return state

  }
}

export default organizationsReducer
