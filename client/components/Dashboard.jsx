import React from 'react'
import Account from './Dashboard/Account'
import Organizations from './Dashboard/Organizations'
import styles from './Dashboard.scss'

const Dashboard = ({
  accountAddress,
  accountOrganizations,
  createOrganization,
  isOrganizationsOwner,
  organization,
  selectOrganiztion,
}) => (
  <div className={styles.container}>
    <div className={styles.dashboard}>
      <Account
        accountAddress={accountAddress}
        isOrganizationsOwner={isOrganizationsOwner}
      />
      <Organizations
        accountAddress={accountAddress}
        accountOrganizations={accountOrganizations}
        createOrganization={createOrganization}
        isOrganizationsOwner={isOrganizationsOwner}
        selectOrganiztion={selectOrganiztion}
      />
    </div>
  </div>
)

export default Dashboard
