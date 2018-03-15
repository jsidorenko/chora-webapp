import React from 'react'
import Account from './Organization/Account'
import Contributors from './Organization/Contributors'
import Overview from './Organization/Overview'
import Sidebar from './Organization/Sidebar'
import Bounties from './Organization/Bounties'
import Transactions from './Organization/Transactions'
import styles from './Organization.scss'

const Organization = ({ address, currentView, isContributor, isOwner, organization, setCurrentView }) => (
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
          address={address}
          isContributor={isContributor}
          isOwner={isOwner}
          organization={organization}
        />
      }
      {currentView === 'Bounties' &&
        <Bounties
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
