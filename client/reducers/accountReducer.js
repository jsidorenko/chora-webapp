import * as actions from '../constants/actions'

const initialState = {

  // account
  account: null,
  accountError: null,
  accountLoading: true,

  // organiationsOwner
  organizationsOwner: null,
  organizationsOwnerError: null,
  organizationsOwnerLoading: true,

}

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    // checkOrganizationsOwner

    case actions.ACCOUNT_CHECK_ORGANIZATIONS_OWNER:
      return {
        ...state,
        organizationsOwnerError: null,
        organizationsOwnerLoading: true,
      }

    case actions.ACCOUNT_CHECK_ORGANIZATIONS_OWNER_ERROR:
      return {
        ...state,
        organizationsOwnerError: action.payload,
        organizationsOwnerLoading: false,
      }

    case actions.ACCOUNT_CHECK_ORGANIZATIONS_OWNER_SUCCESS:
      return {
        ...state,
        organizationsOwner: action.payload,
        organizationsOwnerLoading: false,
      }

    // getAccountOrganizations

    case actions.ACCOUNT_GET_ORGANIZATIONS:
      return {
        ...state,
        accountError: null,
        accountLoading: true,
      }

    case actions.ACCOUNT_GET_ORGANIZATIONS_ERROR:
      return {
        ...state,
        accountError: action.payload,
        accountLoading: false,
      }

    case actions.ACCOUNT_GET_ORGANIZATIONS_SUCCESS:
      return {
        ...state,
        account: {
          organizations: action.payload,
        },
        accountLoading: false,
      }

    default:
      return state

  }
}

export default userReducer
