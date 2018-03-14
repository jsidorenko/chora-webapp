import * as actions from '../constants/actions'

const initialState = {

  // organizations
  organizations: null,
  organizationsError: null,
  organizationsLoading: true,
  organizationsSuccess: false,

}

const factoryReducer = (state = initialState, action) => {
  switch (action.type) {

    // createOrganization

    case actions.FACTORY_CREATE_ORGANIZATION:
      return {
        ...state,
        organizationsError: null,
        organizationsLoading: true,
        organizationsSuccess: false,
      }

    case actions.FACTORY_CREATE_ORGANIZATION_ERROR:
      return {
        ...state,
        organizationsError: action.payload,
        organizationsLoading: false,
      }

    case actions.FACTORY_CREATE_ORGANIZATION_SUCCESS:
      return {
        ...state,
        organizationsLoading: false,
        organizationsSuccess: action.payload,
      }

    // getOrganizations

    case actions.FACTORY_GET_ORGANIZATIONS:
      return {
        ...state,
        organizationsError: null,
        organizationsLoading: true,
      }

    case actions.FACTORY_GET_ORGANIZATIONS_ERROR:
      return {
        ...state,
        organizationsError: action.payload,
        organizationsLoading: false,
      }

    case actions.FACTORY_GET_ORGANIZATIONS_SUCCESS:
      return {
        ...state,
        organizations: action.payload,
        organizationsLoading: false,
      }

    default:
      return state

  }
}

export default factoryReducer
