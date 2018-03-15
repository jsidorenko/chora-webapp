import React from 'react'
import styles from './Bounties.scss'

const Bounties = ({ address, organization }) => (
  <div className={styles.content}>
    <h2>Bounties</h2>
    <ul>
      <li>
        <p>name: learn how to earn tokens</p>
        <p>creator: {organization.owner}</p>
        <p>description: {'(1) claim this bounty (2) submit this bounty'}</p>
        <p>etherAward: 0</p>
        <p>tokenAward: 1</p>
        <button className={styles.button}>
          Claim Bounty
        </button>
        <button className={styles.button}>
          Submit Bounty
        </button>
      </li>
    </ul>
  </div>
)

export default Bounties
