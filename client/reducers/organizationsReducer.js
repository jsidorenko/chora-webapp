import * as actions from '../constants/actions'

const initialState = {

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

  // organizationsContributor
  organizationsContributor: null,
  organizationsContributorError: null,
  organizationsContributorLoading: true,

  // organizationsOwner
  organizationsOwner: null,
  organizationsOwnerError: null,
  organizationsOwnerLoading: true,

  // owner
  owner: null,
  ownerError: null,
  ownerLoading: true,

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

    // getOrganizationsContributor

    case actions.ORGANIZATIONS_GET_ORGANIZATIONS_CONTRIBUTOR:
      return {
        ...state,
        organizationsContributorError: null,
        organizationsContributorLoading: true,
      }

    case actions.ORGANIZATIONS_GET_ORGANIZATIONS_CONTRIBUTOR_ERROR:
      return {
        ...state,
        organizationsContributorError: action.payload,
        organizationsContributorLoading: false,
      }

    case actions.ORGANIZATIONS_GET_ORGANIZATIONS_CONTRIBUTOR_SUCCESS:
      return {
        ...state,
        organizationsContributor: action.payload,
        organizationsContributorLoading: false,
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

    // getOwner

    case actions.ORGANIZATIONS_GET_OWNER:
      return {
        ...state,
        ownerError: null,
        ownerLoading: true,
      }

    case actions.ORGANIZATIONS_GET_OWNER_ERROR:
      return {
        ...state,
        ownerError: action.payload,
        ownerLoading: false,
      }

    case actions.ORGANIZATIONS_GET_OWNER_SUCCESS:
      return {
        ...state,
        owner: action.payload,
        ownerLoading: false,
      }

    default:
      return state

  }
}

export default organizationsReducer
