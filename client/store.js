import { createStore } from 'redux'
import middleware from './middleware'
import reducers from './reducers'

const configureStore = () => {
  const store = createStore(reducers, middleware)
  return store
}

export default configureStore
