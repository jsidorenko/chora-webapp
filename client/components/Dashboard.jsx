import React from 'react'
import Account from './Account'
import Organization from './Organization'
import Organizations from './Organizations'
import Sidebar from './Sidebar'
import styles from './Dashboard.scss'

const Dashboard = ({ account, organization, selectedOrganization, selectOrganiztion }) => (
  <div className={styles.container}>
    {!selectedOrganization ?
      <div className={styles.dashboard}>
        <Account
          account={account}
        />
        <Organizations
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
