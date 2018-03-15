import React from 'react'
import styles from './Overview.scss'

const Overview = ({ address, isMember, isOwner, organization }) => (
  <div className={styles.content}>
    <h2>Overview</h2>
    {!isOwner &&
      <div>
        {isMember ?
          <button className={styles.button}>
            Leave
          </button>
        :
          <button className={styles.button}>
            Join
          </button>
        }
      </div>
    }
    <p>name: {organization.name}</p>
    <p>address: {address}</p>
    <p>owner: {organization.owner}</p>
    <p>members:</p>
    <ul>
      {organization.members.map(member => (
        <li key={member}>
          {member}
        </li>
      ))}
    </ul>
  </div>
)

export default Overview
