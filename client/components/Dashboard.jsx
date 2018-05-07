import React from 'react'
import Account from './Dashboard/Account'
import Organizations from './Dashboard/Organizations'
import styles from './Dashboard.scss'

const Dashboard = ({
  accountAddress,
  accountOrganizations,
  isOrganizationsOwner,
}) => (
  <div className={styles.container}>
    <div className={styles.dashboard}>
      <Account
        accountAddress={accountAddress}
        isOrganizationsOwner={isOrganizationsOwner}
      />
      <Organizations
        accountOrganizations={accountOrganizations}
      />
    </div>
  </div>
)

export default Dashboard
