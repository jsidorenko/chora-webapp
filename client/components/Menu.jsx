import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Menu.scss'

const Menu = () => (
  <div className={styles.container}>
    <div className={styles.links}>
      <NavLink activeClassName={styles.active} to="/about">
        {'About'}
      </NavLink>
      <NavLink activeClassName={styles.active} to="/projects">
        {'Projects'}
      </NavLink>
    </div>
  </div>
)

export default Menu
