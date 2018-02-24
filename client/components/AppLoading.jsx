import React from 'react'
import { Route } from 'react-router-dom'
import styles from './AppLoading.scss'

const AppLoading = () => (
  <div className={styles.container}>
    <div className={styles.loader} />
  </div>
)

export default AppLoading
