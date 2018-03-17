import React from 'react'
import styles from './Account.scss'

const Account = ({ account, address, isContributor, isOwner }) => (
  <div className={styles.content}>
    <h2>Account</h2>
    <p>isOwner: {isOwner ? 'true' : 'false'}</p>
    <p>isContributor: {isContributor ? 'true' : 'false'}</p>
    <p>bounties: {account.bounties.join(', ')}</p>
    <p>tokens: {account.tokens}</p>
  </div>
)

export default Account
