import * as actions from '../constants/actions'

const initialState = {

  // account
  account: null,
  accountError: null,
  accountLoading: true,

}

const userReducer = (state = initialState, action) => {
  switch (action.type) {

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
