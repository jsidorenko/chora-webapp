import React from 'react'
import styles from './Account.scss'

const Account = ({
  accountAddress,
  isOwner,
}) => (
  <div className={styles.container}>
    <h2>
      {'Account'}
    </h2>
    <p>
      {accountAddress}
    </p>
    <p>
      {`isOwner: ${isOwner ? 'true' : 'false'}`}
    </p>
  </div>
)

export default Account
