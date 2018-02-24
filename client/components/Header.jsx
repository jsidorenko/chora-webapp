import React from 'react'
import styles from './Header.scss'

const Header = ({ address }) => (
  <header className={styles.header}>
    <img className={styles.title} src="img/title.png" />
    <h2 className={styles.address}>{address}</h2>
  </header>
)

export default Header
