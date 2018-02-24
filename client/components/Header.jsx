import React from 'react'
import User from '../containers/User'
import styles from './Header.scss'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.title}>
      <img src="img/title.png" />
    </div>
    <User />
  </header>
)

export default Header
