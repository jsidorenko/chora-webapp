import React from 'react'
import styles from './Overview.scss'

const Overview = ({ address, organization }) => (
  <div className={styles.content}>
    <h2>Overview</h2>
    <p>name: {organization.name}</p>
    <p>address: {address}</p>
    <p>owner: {organization.owner}</p>
    <p>tokens: {organization.tokens}</p>
  </div>
)

export default Overview
