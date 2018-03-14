import React from 'react'
import Header from '../containers/Header'
import Dashboard from '../containers/Dashboard'
import styles from './App.scss'

const App = ({ accountAddress }) => (
  <div className={styles.container}>
    <Header />
    <Dashboard
      accountAddress={accountAddress}
    />
  </div>
)

export default App
