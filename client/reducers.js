import { combineReducers } from 'redux'
import accountReducer from './reducers/accountReducer'
import organizationsReducer from './reducers/organizationsReducer'
import organizationReducer from './reducers/organizationReducer'

const reducers = combineReducers({
  account: accountReducer,
  organizations: organizationsReducer,
  organization: organizationReducer,
})

export default reducers
