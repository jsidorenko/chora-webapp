import React from 'react'
import Members from './Organization/Members'
import Overview from './Organization/Overview'
import Sidebar from './Organization/Sidebar'
import Tasks from './Organization/Tasks'
import Token from './Organization/Token'
import Transactions from './Organization/Transactions'
import Voting from './Organization/Voting'
import styles from './Organization.scss'

const Organization = ({ address, currentView, isMember, isOwner, organization, setCurrentView }) => (
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
          isMember={isMember}
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
      {currentView === 'voting' &&
        <Voting
          address={address}
          organization={organization}
        />
      }
      {currentView === 'members' &&
        <Members
          address={address}
          organization={organization}
        />
      }
      {currentView === 'token' &&
        <Token
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
