import React from 'react'
import styles from './List.scss'

const List = ({ addresses, bounties, deleteBounty }) => (
  <div>
    {!bounties &&
      <span>(no bounties)</span>
    }
    {bounties &&
      <ul>
        {bounties.map((bounty, index) => (
          <li key={addresses[index]}>
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
    }
  </div>
)

export default List
