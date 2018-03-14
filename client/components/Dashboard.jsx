import React from 'react'
import Account from './Account'
import Organization from '../containers/Organization'
import Organizations from '../containers/Organizations'
import Sidebar from './Sidebar'
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
    {!selectedOrganization ?
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
    :
      <div className={styles.dashboard}>
        <Sidebar
          organization={organization}
        />
        <Organization
          organization={organization}
        />
      </div>
    }
  </div>
)

export default Dashboard
