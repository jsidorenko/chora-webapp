import React from 'react'
import styles from './Contributors.scss'

const Contributors = ({ contributorAddresses, contributors }) => (
  <div className={styles.content}>
    <h2>Contributors</h2>
    <ul>
      {contributors.map((contributor, index) => (
        <li key={contributorAddresses[index]}>
          <p>address: {contributorAddresses[index]}</p>
          <p>ballots: {contributor.ballots.join(', ')}</p>
          <p>bounties: {contributor.bounties.join(', ')}</p>
          <p>projects: {contributor.projects.join(', ')}</p>
          <p>tokens: {contributor.tokens}</p>
        </li>
      ))}
    </ul>
  </div>
)

export default Contributors
