import * as actions from '../constants/actions'

const initialState = {

  // organizations
  organizations: null,
  organizationsError: null,
  organizationsLoading: true,
  organizationsSuccess: false,

}

const organizationsReducer = (state = initialState, action) => {
  switch (action.type) {

    // createOrganization

    case actions.ORGANIZATIONS_CREATE_ORGANIZATION:
      return {
        ...state,
        organizationsError: null,
        organizationsLoading: true,
        organizationsSuccess: false,
      }

    case actions.ORGANIZATIONS_CREATE_ORGANIZATION_ERROR:
      return {
        ...state,
        organizationsError: action.payload,
        organizationsLoading: false,
      }

    case actions.ORGANIZATIONS_CREATE_ORGANIZATION_SUCCESS:
      return {
        ...state,
        organizationsLoading: false,
        organizationsSuccess: action.payload,
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
