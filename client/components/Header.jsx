import React from 'react'
import styles from './Header.scss'

const Header = ({ account, accountError, accountLoading, resetOrganization }) => (
  <header className={styles.header}>
    <img
      className={styles.title}
      src="img/title_medium.png"
    />
    <div className={styles.controls}>
      <div className={styles.status}>
        {accountLoading ? 'Loading...' : (accountError ? accountError : (account ? 'Connected' : 'Disconnected'))}
      </div>
      <button className={styles.button} onClick={resetOrganization}>
        {'Dashboard'}
      </button>
    </div>
  </header>
)

export default Header
