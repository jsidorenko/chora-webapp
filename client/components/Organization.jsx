import React from 'react'
import Account from './Organization/Account'
import Ballots from '../containers/Organization/Ballots'
import Bounties from '../containers/Organization/Bounties'
import Contributors from '../containers/Organization/Contributors'
import Overview from './Organization/Overview'
import Projects from '../containers/Organization/Projects'
import Sidebar from './Organization/Sidebar'
import Transactions from '../containers/Organization/Transactions'
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
      {currentView === 'Ballots' &&
        <Ballots
          accountAddress={accountAddress}
          address={address}
          addresses={organization.ballots}
        />
      }
      {currentView === 'Bounties' &&
        <Bounties
          accountAddress={accountAddress}
          address={address}
          addresses={organization.bounties}
        />
      }
      {currentView === 'Projects' &&
        <Projects
          accountAddress={accountAddress}
          address={address}
          addresses={organization.projects}
        />
      }
      {currentView === 'Contributors' &&
        <Contributors
          accountAddress={accountAddress}
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
