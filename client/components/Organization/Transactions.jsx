import React from 'react'
import styles from './Transactions.scss'

const Transactions = ({ address, organization }) => (
  <div className={styles.content}>
    <h2>Transactions</h2>
    <ul>
      <li>
        <p>event: organization created</p>
        <p>sender: {organization.owner}</p>
        <p>ether: na</p>
        <p>tokens: 1</p>
      </li>
      <li>
        <p>event: organization name updated</p>
        <p>sender: {organization.owner}</p>
        <p>ether: na</p>
        <p>tokens: na</p>
      </li>
      <li>
        <p>event: bounty created</p>
        <p>sender: {organization.owner}</p>
        <p>ether: na</p>
        <p>tokens: 1</p>
      </li>
    </ul>
  </div>
)

export default Transactions
