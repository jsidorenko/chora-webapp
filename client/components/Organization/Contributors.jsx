import React from 'react'
import styles from './Contributors.scss'

const Contributors = ({ address, organization }) => (
  <div className={styles.content}>
    <h2>Contributors</h2>
    <ul>
      {organization.contributors.map(contributor => (
        <li key={contributor}>
          {contributor}
        </li>
      ))}
    </ul>
  </div>
)

export default Contributors
