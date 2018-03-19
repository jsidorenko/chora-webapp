import { combineReducers } from 'redux'
import bountiesReducer from './reducers/bountiesReducer'
import organizationsReducer from './reducers/organizationsReducer'
import organizationReducer from './reducers/organizationReducer'

const reducers = combineReducers({
  bounties: bountiesReducer,
  organizations: organizationsReducer,
  organization: organizationReducer,
})

export default reducers
