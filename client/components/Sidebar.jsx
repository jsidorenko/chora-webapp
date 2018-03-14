import React from 'react'
import styles from './Sidebar.scss'

const Sidebar = ({ account, accountError, accountLoading }) => (
  <div className={styles.sidebar}>
    <ul className={styles.list}>
      <li>
        Overview
      </li>
      <li>
        Tasks
      </li>
      <li>
        Voting
      </li>
      <li>
        Members
      </li>
    </ul>
  </div>
)

export default Sidebar
