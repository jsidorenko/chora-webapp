import React from 'react'
import Create from './Ballots/Create'
import List from './Ballots/List'
import styles from './Ballots.scss'

const Ballots = ({
  accountAddress,
  addresses,
  ballots,
  createBallot,
  currentView,
  deleteBallot,
  handleChange,
  newBallot,
  setView,
}) => (
  <div className={styles.content}>
    <button className={styles.button} onClick={() => setView('List')}>
      {'List'}
    </button>
    <button className={styles.button} onClick={() => setView('Create')}>
      {'Create'}
    </button>
    <h2>
      {'Ballots'}
    </h2>
    {currentView === 'Create' &&
      <Create
        createBallot={createBallot}
        handleChange={handleChange}
        newBallot={newBallot}
      />
    }
    {currentView === 'List' &&
      <List
        accountAddress={accountAddress}
        addresses={addresses}
        ballots={ballots}
        deleteBallot={deleteBallot}
      />
    }
  </div>
)

export default Ballots
