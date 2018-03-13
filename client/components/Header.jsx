import React from 'react'
import styles from './Header.scss'

const Header = ({ account, accountError, accountLoading }) => (
  <header className={styles.header}>
    <img
      className={styles.title}
      src="img/title_medium.png"
    />
    <div className={styles.status}>
      {accountLoading ? 'Loading...' : accountError ? accountError : (account ? 'Connected' : 'Disconnected')}
    </div>
  </header>
)

export default Header
