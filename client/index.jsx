import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { DrizzleProvider } from 'drizzle-react'
import createReduxStore from './store'
import router from './router'
import './index.scss'

// import contract interfaces
import Organizations from '../build/contracts/Organizations.json'

// configure drizzle options
const options = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:9545',
    },
  },
  contracts: [
    Organizations,
  ],
  events: {
    Organizations: ['OrganizationCreated', 'OrganizationDeleted'],
  },
}

// create redux store
const store = createReduxStore()

// render application
render(
  <DrizzleProvider options={options}>
    <Provider store={store}>
      {router}
    </Provider>
  </DrizzleProvider>,
  document.getElementById('app')
)

// export redux store
export default store
