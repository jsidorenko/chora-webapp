import React from 'react'
import styles from './Sidebar.scss'

const Sidebar = ({ account, accountError, accountLoading, currentView, setCurrentView }) => (
  <div className={styles.sidebar}>
    <ul className={styles.list}>
      <li className={currentView === 'overview' ? styles.linkActive : styles.link} onClick={() => setCurrentView('overview')}>
        Overview
      </li>
      <li className={currentView === 'tasks' ? styles.linkActive : styles.link} onClick={() => setCurrentView('tasks')}>
        Tasks
      </li>
      <li className={currentView === 'voting' ? styles.linkActive : styles.link} onClick={() => setCurrentView('voting')}>
        Voting
      </li>
      <li className={currentView === 'members' ? styles.linkActive : styles.link} onClick={() => setCurrentView('members')}>
        Members
      </li>
      <li className={currentView === 'token' ? styles.linkActive : styles.link} onClick={() => setCurrentView('token')}>
        Token
      </li>
      <li className={currentView === 'transactions' ? styles.linkActive : styles.link} onClick={() => setCurrentView('transactions')}>
        Transactions
      </li>
    </ul>
  </div>
)

export default Sidebar
