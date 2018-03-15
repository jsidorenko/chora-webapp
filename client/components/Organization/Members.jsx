import React from 'react'
import styles from './Members.scss'

const Members = ({ address, organization }) => (
  <div className={styles.content}>
    <h2>Members</h2>
    <ul>
      {organization.members.map(member => (
        <li key={member}>
          {member}
        </li>
      ))}
    </ul>
  </div>
)

export default Members
