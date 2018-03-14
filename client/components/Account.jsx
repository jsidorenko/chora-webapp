import React from 'react'
import styles from './Account.scss'

const Account = ({ account }) => (
  <div className={styles.container}>
    <h2>Account</h2>
    <p>{account.address}</p>
  </div>
)

export default Account
