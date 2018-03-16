import * as actions from '../constants/actions'

const initialState = {

  // accountOrganizations
  accountOrganizations: null,
  accountOrganizationsError: null,
  accountOrganizationsLoading: true,

  // organiationsOwner
  organizationsOwner: null,
  organizationsOwnerError: null,
  organizationsOwnerLoading: true,

}

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    // getAccountOrganizations

    case actions.ACCOUNT_GET_ORGANIZATIONS:
      return {
        ...state,
        accountOrganizationsError: null,
        accountOrganizationsLoading: true,
      }

    case actions.ACCOUNT_GET_ORGANIZATIONS_ERROR:
      return {
        ...state,
        accountOrganizationsError: action.payload,
        accountOrganizationsLoading: false,
      }

    case actions.ACCOUNT_GET_ORGANIZATIONS_SUCCESS:
      return {
        ...state,
        accountOrganizations: action.payload,
        accountOrganizationsLoading: false,
      }

    // getOrganizationsOwner

    case actions.ACCOUNT_GET_ORGANIZATIONS_OWNER:
      return {
        ...state,
        organizationsOwnerError: null,
        organizationsOwnerLoading: true,
      }

    case actions.ACCOUNT_GET_ORGANIZATIONS_OWNER_ERROR:
      return {
        ...state,
        organizationsOwnerError: action.payload,
        organizationsOwnerLoading: false,
      }

    case actions.ACCOUNT_GET_ORGANIZATIONS_OWNER_SUCCESS:
      return {
        ...state,
        organizationsOwner: action.payload,
        organizationsOwnerLoading: false,
      }

    default:
      return state

  }
}

export default userReducer
