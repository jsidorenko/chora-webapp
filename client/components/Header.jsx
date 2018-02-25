import React from 'react'
import { NavLink } from 'react-router-dom'
import User from '../containers/User'
import styles from './Header.scss'

const Header = () => (
  <header className={styles.header}>
    <NavLink className={styles.title} to="/">
      <img src="img/title_medium.png" />
    </NavLink>
    <User />
  </header>
)

export default Header
