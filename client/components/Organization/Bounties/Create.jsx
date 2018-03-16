import React from 'react'
import styles from './Create.scss'

const Create = ({ createBounty, handleChange, newBounty, setView }) => (
  <div>
    <div className={styles.field}>
      <span className={styles.label}>
        name:
      </span>
      <input
        className={styles.input}
        id="name"
        onChange={handleChange}
        type="text"
        value={newBounty.name}
      />
    </div>
    <div className={styles.field}>
      <span className={styles.label}>
        description:
      </span>
      <input
        className={styles.input}
        id="description"
        onChange={handleChange}
        type="text"
        value={newBounty.description}
      />
    </div>
    <div className={styles.field}>
      <span className={styles.label}>
        ether:
      </span>
      <input
        className={styles.input}
        id="ether"
        onChange={handleChange}
        type="number"
        value={newBounty.ether}
      />
    </div>
    <div className={styles.field}>
      <button className={styles.button} onClick={createBounty}>
        {'Submit'}
      </button>
    </div>
  </div>
)

export default Create
