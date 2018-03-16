import React from 'react'
import styles from './Account.scss'

const Account = ({ accountAddress, isOrganizationsOwner }) => (
  <div className={styles.container}>
    <h2>Account</h2>
    <p>{accountAddress}</p>
    <p>isOrganizationsOwner: {isOrganizationsOwner ? 'true' : 'false'}</p>
  </div>
)

export default Account
