import { createStore } from 'redux'
import middleware from './middleware'
import reducers from './reducers'

// configure create redux store
const createReduxStore = () => {
  const store = createStore(reducers, middleware)
  return store
}

// export create redux store
export default createReduxStore
