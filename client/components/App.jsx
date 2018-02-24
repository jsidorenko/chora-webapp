import React from 'react'
import { Route } from 'react-router-dom'
import Footer from './Footer'
import Header from '../containers/Header'
import styles from './App.scss'

const App = ({ address }) => (
  <div className={styles.container}>
    <Header />
    <Footer />
  </div>
)

export default App
