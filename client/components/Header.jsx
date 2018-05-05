import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.scss'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.content}>
      <NavLink to="/">
        <img
          className={styles.title}
          src="https://chora.io/img/title_wb_small.png"
        />
      </NavLink>
      <div className={styles.links}>
        <NavLink activeClassName={styles.activeLink} className={styles.link} exact to="/">
          {'dashboard'}
        </NavLink>
        <NavLink activeClassName={styles.activeLink} className={styles.link} to="/organizations">
          {'organizations'}
        </NavLink>
      </div>
    </div>
  </header>
)

export default Header
