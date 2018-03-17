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
            <p>owner: {bounty.owner}</p>
            <p>pursuer: {bounty.pursuer}</p>
            <p>name: {bounty.name}</p>
            <p>description: {bounty.description}</p>
            <p>ether: {bounty.ether}</p>
            <p>tokens: {bounty.tokens}</p>
            <p>workSubmitted: {bounty.workSubmitted ? 'true' : 'false'}</p>
            {bounty.pursuer === '0x0000000000000000000000000000000000000000' &&
              <button className={styles.button} onClick={() => claimBounty(addresses[index])}>
                Claim Bounty
              </button>
            }
            {!bounty.workSubmitted && accountAddress.toLowerCase() === bounty.pursuer.toLowerCase() &&
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
