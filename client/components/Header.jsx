import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.scss'

const Header = () => (
  <header className={styles.header}>
    <NavLink to="/">
      <img
        className={styles.title}
        src="img/title_wb_medium.png"
      />
    </NavLink>
    <div className={styles.links}>
      <NavLink activeClassName={styles.activeLink} className={styles.link} exact to="/">
        {'Dashboard'}
      </NavLink>
      <NavLink activeClassName={styles.activeLink} className={styles.link} to="/organizations">
        {'Organizations'}
      </NavLink>
    </div>
  </header>
)

export default Header
