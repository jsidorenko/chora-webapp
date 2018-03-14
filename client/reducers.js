import { combineReducers } from 'redux'
import organizationsReducer from './reducers/organizationsReducer'
import organizationReducer from './reducers/organizationReducer'
import userReducer from './reducers/userReducer'

const reducers = combineReducers({
  organizations: organizationsReducer,
  organization: organizationReducer,
  user: userReducer
})

export default reducers
