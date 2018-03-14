import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { DrizzleProvider } from 'drizzle-react'
import configureStore from './store'
import router from './router'
import './index.scss'

// Contracts
import Account from '../contracts/Account.json'
import Organization from '../contracts/Organization.json'

// Drizzle Options
const options = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:9545'
    }
  },
  contracts: [
    Account,
    Organization,
  ],
  events: {
    Account: ['AccountUpdate'],
    Organization: ['OrganizationUpdate']
  }
}

const store = configureStore()

render(
  <DrizzleProvider options={options}>
    <Provider store={store}>
      {router}
    </Provider>
  </DrizzleProvider>,
  document.getElementById('app')
)

export default store
