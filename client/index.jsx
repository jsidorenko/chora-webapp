import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import configureStore from './store'
import router from './router'
import './index.scss'

const store = configureStore()

render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
)

export default store
