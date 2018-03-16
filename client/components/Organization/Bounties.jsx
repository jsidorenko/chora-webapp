import React from 'react'
import Create from './Bounties/Create'
import List from './Bounties/List'
import styles from './Bounties.scss'

const Bounties = ({ addresses, bounties, createBounty, currentView, deleteBounty, handleChange, newBounty, setView }) => (
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
        addresses={addresses}
        bounties={bounties}
        deleteBounty={deleteBounty}
      />
    }
  </div>
)

export default Bounties
