import React from 'react'
import Create from './Bounties/Create'
import List from './Bounties/List'
import styles from './Bounties.scss'

const Bounties = ({
  accountAddress,
  addresses,
  bounties,
  claimBounty,
  createBounty,
  currentView,
  deleteBounty,
  handleChange,
  newBounty,
  setView,
  submitWork,
}) => (
  <div className={styles.content}>
    <button className={styles.button} onClick={() => setView('List')}>
      List
    </button>
    <button className={styles.button} onClick={() => setView('Create')}>
      Create
    </button>
    <h2>Bounties</h2>
    {currentView === 'Create' &&
      <Create
        createBounty={createBounty}
        handleChange={handleChange}
        newBounty={newBounty}
      />
    }
    {currentView === 'List' &&
      <List
        accountAddress={accountAddress}
        addresses={addresses}
        bounties={bounties}
        claimBounty={claimBounty}
        deleteBounty={deleteBounty}
        submitWork={submitWork}
      />
    }
  </div>
)

export default Bounties
