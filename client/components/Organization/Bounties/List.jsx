import React from 'react'
import styles from './List.scss'

const List = ({ accountAddress, addresses, bounties, claimBounty, deleteBounty, submitWork }) => (
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
            {bounty.pursuer !== '0x0000000000000000000000000000000000000000' ?
              <p>pursuer: {bounty.pursuer}</p>
            :
              <button className={styles.button} onClick={() => claimBounty(addresses[index])}>
                Claim Bounty
              </button>
            }
            {accountAddress === bounty.pursuer &&
              <button className={styles.button} onClick={() => submitWork(addresses[index])}>
                Submit Work
              </button>
            }
          </li>
        ))}
      </ul>
    }
  </div>
)

export default List
