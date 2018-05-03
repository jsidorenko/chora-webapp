import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import Dashboard from '../containers/Dashboard'
import Organization from '../containers/Organization'
import Organizations from '../containers/Organizations'
import styles from './App.scss'

const App = ({ accountAddress }) => (
  <div className={styles.container}>
    <Header />
    <Switch>
      <Route exact path="/" render={() => (
        <Dashboard
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
