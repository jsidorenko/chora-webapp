import { combineReducers } from 'redux'
import organizationReducer from './reducers/organizationReducer'
import userReducer from './reducers/userReducer'

const reducers = combineReducers({
  organization: organizationReducer,
  user: userReducer
})

export default reducers
