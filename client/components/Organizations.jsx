import React from 'react'
import styles from './Organizations.scss'

const Organizations = ({ organizations, selectOrganiztion }) => (
  <div className={styles.container}>
    <h2>Organizations</h2>
    <ul>
      {organizations && organizations.map(organization => (
        <li key={organization}>
          <button className={styles.organization} onClick={() => selectOrganiztion(organization)}>
            {organization}
          </button>
        </li>
      ))}
    </ul>
  </div>
)

export default Organizations
