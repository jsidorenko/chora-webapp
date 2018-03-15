import React from 'react'
import styles from './Overview.scss'

const Overview = ({ address, isContributor, isOwner, organization }) => (
  <div className={styles.content}>
    <h2>Overview</h2>
    <p>name: {organization.name}</p>
    <p>address: {address}</p>
    <p>owner: {organization.owner}</p>
    <p>isOwner: {isOwner ? 'true' : 'false'}</p>
    <p>isContributor: {isContributor ? 'true' : 'false'}</p>
  </div>
)

export default Overview
