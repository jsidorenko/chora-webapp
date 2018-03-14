import React from 'react'
import Create from './Organizations/Create'
import List from './Organizations/List'
import styles from './Organizations.scss'

const Organizations = ({
  createOrganization,
  handleName,
  name,
  organizations,
}) => (
  <div className={styles.container}>
    <div className={styles.dashboard}>
      <List
        organizations={organizations}
      />
      <Create
        createOrganization={createOrganization}
        handleName={handleName}
        name={name}
      />
    </div>
  </div>
)

export default Organizations
