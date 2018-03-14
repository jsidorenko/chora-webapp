import React from 'react'
import styles from './Organization.scss'

const Organization = ({ organization }) => (
  <div className={styles.container}>
    {organization ?
      <div>
        <p>name: {organization.name}</p>
        <p>owner: {organization.owner}</p>
        <p>members:</p>
        <ul>
          {organization.members.map(member => (
            <li>{member}</li>
          ))}
        </ul>
      </div>
    :
      <p>Loading...</p>
    }
  </div>
)

export default Organization
