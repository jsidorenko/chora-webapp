import { combineReducers } from 'redux'
import ballotsReducer from './reducers/ballotsReducer'
import bountiesReducer from './reducers/bountiesReducer'
import organizationsReducer from './reducers/organizationsReducer'
import organizationReducer from './reducers/organizationReducer'
import projectsReducer from './reducers/projectsReducer'

const reducers = combineReducers({
  ballots: ballotsReducer,
  bounties: bountiesReducer,
  organizations: organizationsReducer,
  organization: organizationReducer,
  projects: projectsReducer,
})

export default reducers
