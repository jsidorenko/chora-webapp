import { combineReducers } from 'redux'
import appReducer from './reducers/appReducer'
import userReducer from './reducers/userReducer'

const reducers = combineReducers({
  app: appReducer,
  user: userReducer
})

export default reducers
