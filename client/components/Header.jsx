import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.scss'

const Header = () => (
  <header className={styles.header}>
    <img
      className={styles.title}
      src="img/title_medium.png"
    />
    <div className={styles.controls}>
      <NavLink className={styles.button} to="/">
        {'Dashboard'}
      </NavLink>
      <NavLink className={styles.button} to="/organizations">
        {'Organizations'}
      </NavLink>
    </div>
  </header>
)

export default Header
