import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Organizations.scss'

const Organizations = ({
  organizationsContributor,
  organizationsOwner,
}) => (
  <div className={styles.container}>
    <h2>
      {'Organizations (owner)'}
    </h2>
    <ul>
      {organizationsOwner && organizationsOwner.map(organization => (
        <li key={organization}>
          <NavLink className={styles.organization} to={`/${organization}`}>
            {organization}
          </NavLink>
        </li>
      ))}
    </ul>
    <h2>
      {'Organizations (contributor)'}
    </h2>
    <ul>
      {organizationsContributor && organizationsContributor.map(organization => (
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
