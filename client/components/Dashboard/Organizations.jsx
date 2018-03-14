import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Organizations.scss'

const Organizations = ({ organizations }) => (
  <div className={styles.container}>
    <h2>Organizations</h2>
    <ul>
      {organizations && organizations.map(organization => (
        <li key={organization}>
          <NavLink className={styles.organization} to={`/${organization}`}>
            {organization}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
)

export default Organizations
