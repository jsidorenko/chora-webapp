import React from 'react'
import styles from './User.scss'

const User = ({ account, loading }) => (
  <div className={styles.container}>
    <div className={styles.content}>
      {loading ? 'Loading...' : (account ? 'Connected' : 'Disconnected')}
    </div>
  </div>
)

export default User
