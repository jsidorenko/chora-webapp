import React from 'react'
import Header from '../containers/Header'
import Dashboard from '../containers/Dashboard'
import styles from './App.scss'

const App = () => (
  <div className={styles.container}>
    <Header />
    <Dashboard />
  </div>
)

export default App
