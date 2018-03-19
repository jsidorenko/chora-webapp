import React from 'react'
import styles from './Transactions.scss'

const Transactions = ({ accountAddress, transactions }) => (
  <div className={styles.content}>
    <h2>Transactions</h2>
    <ul>
      {transactions.map(transaction => (
        <li key={transaction.blockNumber}>
          <p>address: {transaction.address}</p>
          <p>arg.bountyAddress: {transaction.args.bountyAddress}</p>
          <p>arg.bountyName: {transaction.args.bountyName}</p>
          <p>arg.sender: {transaction.args.sender}</p>
          <p>blockHash: {transaction.blockHash}</p>
          <p>blockNumber: {transaction.blockNumber}</p>
          <p>event: {transaction.event}</p>
          <p>logIndex: {transaction.logIndex}</p>
          <p>transactionHash: {transaction.transactionHash}</p>
          <p>transactionIndex: {transaction.transactionIndex}</p>
          <p>type: {transaction.type}</p>
        </li>
      ))}
    </ul>
  </div>
)

export default Transactions
