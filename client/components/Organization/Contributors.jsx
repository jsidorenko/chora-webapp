import React from 'react'
import styles from './Contributors.scss'

const Contributors = ({ address, organization }) => (
  <div className={styles.content}>
    <h2>Contributors</h2>
    <ul>
      {organization.contributors.map(contributor => (
        <li key={contributor}>
          <p>account: {contributor}</p>
          <p>bountiesCreated: 1</p>
          <p>bountiesCompleted: 0</p>
          <p>tokens: 2</p>
        </li>
      ))}
    </ul>
  </div>
)

export default Contributors
