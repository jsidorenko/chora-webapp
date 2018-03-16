import React from 'react'
import Create from './Organizations/Create'
import List from './Organizations/Organizations'
import styles from './Organizations.scss'

const Organizations = ({
  createOrganization,
  deleteOrganization,
  handleOrganizationName,
  isOrganizationsOwner,
  newOrganizationName,
  organizations,
}) => (
  <div className={styles.container}>
    <div className={styles.dashboard}>
      <List
        deleteOrganization={deleteOrganization}
        organizations={organizations}
        isOrganizationsOwner={isOrganizationsOwner}
      />
      <Create
        createOrganization={createOrganization}
        handleOrganizationName={handleOrganizationName}
        newOrganizationName={newOrganizationName}
      />
    </div>
  </div>
)

export default Organizations
