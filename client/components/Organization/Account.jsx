import React from 'react'
import styles from './Account.scss'

const Account = ({ address, isContributor, isOwner, organization }) => (
  <div className={styles.content}>
    <h2>Account</h2>
    <p>isOwner: {isOwner ? 'true' : 'false'}</p>
    <p>isContributor: {isContributor ? 'true' : 'false'}</p>
    <p>tokensOwned: 1</p>
  </div>
)

export default Account
