import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './List.scss'

const List = ({ organizations, isOrganizationsOwner }) => (
  <div className={styles.container}>
    <h2>{'All Organizations'}</h2>
    <ul>
      {organizations && organizations.map(organization => (
        <li key={organization}>
          {isOrganizationsOwner &&
            <button className={styles.button}>
              {'X'}
            </button>
          }
          <NavLink className={styles.organization} to={`/${organization}`}>
            {organization}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
)

export default List
