import React from 'react'
import styles from './Sidebar.scss'

const Sidebar = ({ account, accountError, accountLoading, currentView, setCurrentView }) => (
  <div className={styles.sidebar}>
    <ul className={styles.list}>
      <li className={currentView === 'Overview' ? styles.linkActive : styles.link} onClick={() => setCurrentView('Overview')}>
        Overview
      </li>
      <li className={currentView === 'Account' ? styles.linkActive : styles.link} onClick={() => setCurrentView('Account')}>
        Account
      </li>
      <li className={currentView === 'Bounties' ? styles.linkActive : styles.link} onClick={() => setCurrentView('Bounties')}>
        Bounties
      </li>
      <li className={currentView === 'Contributors' ? styles.linkActive : styles.link} onClick={() => setCurrentView('Contributors')}>
        Contributors
      </li>
      <li className={currentView === 'Transactions' ? styles.linkActive : styles.link} onClick={() => setCurrentView('Transactions')}>
        Transactions
      </li>
    </ul>
  </div>
)

export default Sidebar
