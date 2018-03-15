import React from 'react'
import Contributors from './Organization/Contributors'
import Overview from './Organization/Overview'
import Sidebar from './Organization/Sidebar'
import Tasks from './Organization/Tasks'
import Tokens from './Organization/Tokens'
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
      {currentView === 'overview' &&
        <Overview
          address={address}
          isContributor={isContributor}
          isOwner={isOwner}
          organization={organization}
        />
      }
      {currentView === 'tasks' &&
        <Tasks
          address={address}
          organization={organization}
        />
      }
      {currentView === 'tokens' &&
        <Tokens
          address={address}
          organization={organization}
        />
      }
      {currentView === 'contributors' &&
        <Contributors
          address={address}
          organization={organization}
        />
      }
      {currentView === 'transactions' &&
        <Transactions
          address={address}
          organization={organization}
        />
      }
    </div>
  </div>
)

export default Organization
