import React from 'react'
import Account from './Dashboard/Account'
import Organizations from './Dashboard/Organizations'
import styles from './Dashboard.scss'

const Dashboard = ({
  accountAddress,
  organizationsContributor,
  organizationsOwner,
  isOwner,
}) => (
  <div className={styles.container}>
    <div className={styles.dashboard}>
      <Account
        accountAddress={accountAddress}
        isOwner={isOwner}
      />
      <Organizations
        organizationsContributor={organizationsContributor}
        organizationsOwner={organizationsOwner}
      />
    </div>
  </div>
)

export default Dashboard
