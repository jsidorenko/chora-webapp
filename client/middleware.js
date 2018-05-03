import { applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

const logger = createLogger({
  collapsed: true,
})

let middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, logger]
}

export default applyMiddleware(...middleware)
