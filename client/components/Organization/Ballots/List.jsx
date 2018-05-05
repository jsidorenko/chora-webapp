import React from 'react'
import styles from './List.scss'

const List = ({
  accountAddress,
  addresses,
  ballots,
  deleteBallot,
}) => (
  <div>
    {ballots ?
      <ul>
        {ballots.map((ballot, index) => (
          <li key={addresses[index]}>
            <p>
              {`address: ${addresses[index]}`}
            </p>
            <p>
              {`owner: ${ballot.owner}`}
            </p>
            <p>
              {`name: ${ballot.name}`}
            </p>
          </li>
        ))}
      </ul>
    :
      <span>
        {'(no ballots)'}
      </span>
    }
  </div>
)

export default List
