import { combineReducers } from 'redux'
import factoryReducer from './reducers/factoryReducer'
import organizationReducer from './reducers/organizationReducer'
import userReducer from './reducers/userReducer'

const reducers = combineReducers({
  factory: factoryReducer,
  organization: organizationReducer,
  user: userReducer
})

export default reducers
