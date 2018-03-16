import React from 'react'
import styles from './Bounties.scss'

const Bounties = ({ addresses, bounties }) => (
  <div className={styles.content}>
    <h2>Bounties</h2>
    <ul>
      {bounties && bounties.map((bounty, index) => (
        <li key={bounty}>
          <p>address: {addresses[index]}</p>
          <p>description: {bounty.description}</p>
          <p>name: {bounty.name}</p>
          <p>owner: {bounty.owner}</p>
          <p>ether: {bounty.ether}</p>
          <p>tokens: {bounty.tokens}</p>
          <button className={styles.button}>
            Claim Bounty
          </button>
          <button className={styles.button}>
            Submit Bounty
          </button>
        </li>
      ))}
    </ul>
  </div>
)

export default Bounties
