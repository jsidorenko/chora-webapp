import React from 'react'
import AccountInfo from './Account/AccountInfo'
import Organizations from './Account/Organizations'
import styles from './Account.scss'

const Account = ({
  account,
  accountAddress,
  createOrganization,
  organization,
  selectedOrganization,
  selectOrganiztion,
}) => (
  <div className={styles.container}>
    <div className={styles.dashboard}>
      <AccountInfo
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

export default Account
