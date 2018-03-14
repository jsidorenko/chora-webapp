import React from 'react'
import styles from './Organizations.scss'

const Organizations = ({
  createOrganization,
  handleName,
  name,
  organizations,
  selectOrganiztion,
}) => (
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
    <input
      className={styles.input}
      onChange={handleName}
      value={name}
    />
    <button className={styles.button} onClick={createOrganization}>
      {'Create Organization'}
    </button>
  </div>
)

export default Organizations
