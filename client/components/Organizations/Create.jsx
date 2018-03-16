import React from 'react'
import styles from './Create.scss'

const Create = ({
  createOrganization,
  handleOrganizationName,
  organizationName,
}) => (
  <div className={styles.container}>
    <h2>Create Organization</h2>
    <input
      className={styles.input}
      onChange={handleOrganizationName}
      value={organizationName}
    />
    <button className={styles.button} onClick={createOrganization}>
      {'Create Organization'}
    </button>
  </div>
)

export default Create
