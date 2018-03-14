import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { DrizzleProvider } from 'drizzle-react'
import configureStore from './store'
import router from './router'
import './index.scss'

// Contracts
import Account from '../build/contracts/Account.json'
import Organizations from '../build/contracts/Organizations.json'
import Organization from '../build/contracts/Organization.json'

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
    Organizations,
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
