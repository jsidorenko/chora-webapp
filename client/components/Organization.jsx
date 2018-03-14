import React from 'react'
import Sidebar from './Organization/Sidebar'
import styles from './Organization.scss'

const Organization = ({ address, organization }) => (
  <div className={styles.container}>
    <div className={styles.dashboard}>
      <Sidebar
        organization={organization}
      />
      <div className={styles.content}>
        <p>name: {organization.name}</p>
        <p>address: {address}</p>
        <p>owner: {organization.owner}</p>
        <p>members:</p>
        <ul>
          {organization.members.map(member => (
            <li key={member}>
              {member}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

export default Organization
