import React from 'react'
import Create from './Organizations/Create'
import List from './Organizations/List'
import styles from './Organizations.scss'

const Organizations = ({
  createOrganization,
  deleteOrganization,
  handleOrganizationName,
  isOrganizationsOwner,
  organizationName,
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
        organizationName={organizationName}
      />
    </div>
  </div>
)

export default Organizations
