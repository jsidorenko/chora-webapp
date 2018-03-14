import React from 'react'
import styles from './Create.scss'

const Create = ({
  createOrganization,
  handleName,
  name,
}) => (
  <div className={styles.container}>
    <h2>Create Organization</h2>
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

export default Create
