import React from 'react'
import styles from './Account.scss'

const Account = ({ account, accountAddress }) => (
  <div className={styles.container}>
    <h2>Account</h2>
    <p>{accountAddress}</p>
  </div>
)

export default Account
