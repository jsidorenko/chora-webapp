import * as actions from '../constants/actions'

const initialState = {

  // instance
  instance: null,
  instanceError: null,
  instanceLoading: true,

}

const appReducer = (state = initialState, action) => {
  switch (action.type) {

    // getInstance

    case actions.APP_GET_INSTANCE:
      return {
        ...state,
        instanceError: null,
        instanceLoading: false,
      }

    case actions.APP_GET_INSTANCE_ERROR:
      return {
        ...state,
        instanceError: action.payload,
        instanceLoading: false,
      }

    case actions.APP_GET_INSTANCE_SUCCESS:
      return {
        ...state,
        instance: action.payload,
        instanceLoading: false,
      }

    default:
      return state

  }
}

export default appReducer
