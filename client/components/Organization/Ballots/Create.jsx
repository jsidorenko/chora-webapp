import React from 'react'
import styles from './Create.scss'

const Create = ({
  createBallot,
  handleChange,
  newBallot,
  setView,
}) => (
  <div>
    <div className={styles.field}>
      <span className={styles.label}>
        {'name:'}
      </span>
      <input
        className={styles.input}
        id="name"
        onChange={handleChange}
        type="text"
        value={newBallot.name}
      />
    </div>
    <div className={styles.field}>
      <button className={styles.button} onClick={createBallot}>
        {'Submit'}
      </button>
    </div>
  </div>
)

export default Create
