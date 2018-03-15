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
      <li className={currentView === 'tokens' ? styles.linkActive : styles.link} onClick={() => setCurrentView('tokens')}>
        Tokens
      </li>
      <li className={currentView === 'contributors' ? styles.linkActive : styles.link} onClick={() => setCurrentView('contributors')}>
        Contributors
      </li>
      <li className={currentView === 'transactions' ? styles.linkActive : styles.link} onClick={() => setCurrentView('transactions')}>
        Transactions
      </li>
    </ul>
  </div>
)

export default Sidebar
