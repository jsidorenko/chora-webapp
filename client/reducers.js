import { combineReducers } from 'redux'
import accountReducer from './reducers/accountReducer'
import bountiesReducer from './reducers/bountiesReducer'
import organizationsReducer from './reducers/organizationsReducer'
import organizationReducer from './reducers/organizationReducer'

const reducers = combineReducers({
  account: accountReducer,
  bounties: bountiesReducer,
  organizations: organizationsReducer,
  organization: organizationReducer,
})

export default reducers
