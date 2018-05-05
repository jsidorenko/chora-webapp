import React from 'react'
import { Route } from 'react-router-dom'
import styles from './PageError.scss'

const PageError = ({ message }) => (
  <div className={styles.container}>
    <div className={styles.content}>
      <p>
        {message}
      </p>
    </div>
  </div>
)

export default PageError
