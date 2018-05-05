import React from 'react'
import { Route } from 'react-router-dom'
import styles from './PageLoader.scss'

const PageLoader = () => (
  <div className={styles.container}>
    <div className={styles.loader} />
  </div>
)

export default PageLoader
