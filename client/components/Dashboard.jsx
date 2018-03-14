import React from 'react'
import Account from './Dashboard/Account'
import Organizations from './Dashboard/Organizations'
import styles from './Dashboard.scss'

const Dashboard = ({
  account,
  accountAddress,
  createOrganization,
  organization,
  selectedOrganization,
  selectOrganiztion,
}) => (
  <div className={styles.container}>
    <div className={styles.dashboard}>
      <Account
        account={account}
        accountAddress={accountAddress}
      />
      <Organizations
        accountAddress={accountAddress}
        createOrganization={createOrganization}
        organizations={account.organizations}
        selectOrganiztion={selectOrganiztion}
      />
    </div>
  </div>
)

export default Dashboard
