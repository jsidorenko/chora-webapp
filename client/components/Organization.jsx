import React from 'react'
import Account from './Organization/Account'
import Contributors from './Organization/Contributors'
import Overview from './Organization/Overview'
import Sidebar from './Organization/Sidebar'
import Bounties from '../containers/Organization/Bounties'
import Transactions from './Organization/Transactions'
import styles from './Organization.scss'

const Organization = ({ account, accountAddress, address, currentView, isContributor, isOwner, organization, setCurrentView }) => (
  <div className={styles.container}>
    <div className={styles.dashboard}>
      <Sidebar
        currentView={currentView}
        organization={organization}
        setCurrentView={setCurrentView}
      />
      {currentView === 'Overview' &&
        <Overview
          address={address}
          organization={organization}
        />
      }
      {currentView === 'Account' &&
        <Account
          account={account}
          address={address}
          isContributor={isContributor}
          isOwner={isOwner}
        />
      }
      {currentView === 'Bounties' &&
        <Bounties
          accountAddress={accountAddress}
          address={address}
          organization={organization}
        />
      }
      {currentView === 'Contributors' &&
        <Contributors
          address={address}
          organization={organization}
        />
      }
      {currentView === 'Transactions' &&
        <Transactions
          address={address}
          organization={organization}
        />
      }
    </div>
  </div>
)

export default Organization
