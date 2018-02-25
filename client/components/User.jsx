import React from 'react'
import styles from './User.scss'

const User = ({ account, handleClick, loading }) => (
  <div className={styles.container}>
    <button className={styles.button} onClick={handleClick}>
      {loading ? 'Loading...' : (account ? 'Account' : 'Connect')}
    </button>
  </div>
)

export default User
