import React from 'react'
import styles from './AccountInfo.scss'

const AccountInfo = ({ account, accountAddress }) => (
  <div className={styles.container}>
    <h2>AccountInfo</h2>
    <p>{accountAddress}</p>
  </div>
)

export default AccountInfo
