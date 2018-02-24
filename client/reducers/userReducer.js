import * as actions from '../constants/actions'

const initialState = {

  // account
  account: null,
  accountError: true,
  accountLoading: true,

}

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    // getAccount

    case actions.USER_GET_ACCOUNT:
      return {
        ...state,
        accountError: null,
        accountLoading: true,
      }

    case actions.USER_GET_ACCOUNT_ERROR:
      return {
        ...state,
        accountError: action.payload,
        accountLoading: false,
      }

    case actions.USER_GET_ACCOUNT_SUCCESS:
      return {
        ...state,
        account: action.payload,
        accountLoading: false,
      }

    default:
      return state

  }
}

export default userReducer
