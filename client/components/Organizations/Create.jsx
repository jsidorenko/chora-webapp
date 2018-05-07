import React from 'react'
import styles from './Create.scss'

const Create = ({
  createOrganization,
  handleChangeName,
  organizationName,
}) => (
  <div className={styles.container}>
    <h2>
      {'Create Organization'}
    </h2>
    <div className={styles.field}>
      <input
        className={styles.input}
        onChange={handleChangeName}
        placeholder="organization name"
        value={organizationName}
      />
    </div>
    <div className={styles.buttons}>
      <button className={styles.button} onClick={createOrganization}>
        {'Create Organization'}
      </button>
    </div>
  </div>
)

export default Create
