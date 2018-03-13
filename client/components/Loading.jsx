import React from 'react'
import { Route } from 'react-router-dom'
import styles from './Loading.scss'

const Loading = () => (
  <div className={styles.container}>
    <div className={styles.loader} />
  </div>
)

export default Loading
