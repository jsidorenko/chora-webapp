import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import Account from '../containers/Account'
import Organization from '../containers/Organization'
import Organizations from '../containers/Organizations'
import styles from './App.scss'

const App = ({ accountAddress }) => (
  <div className={styles.container}>
    <Header />
    <Switch>
      <Route path="/" exact render={() => (
        <Account
          accountAddress={accountAddress}
        />
      )} />
      <Route path="/organizations" render={() => (
        <Organizations
          accountAddress={accountAddress}
        />
      )} />
      <Route path="/:address" render={() => (
        <Organization
          accountAddress={accountAddress}
        />
      )} />
    </Switch>
  </div>
)

export default App
