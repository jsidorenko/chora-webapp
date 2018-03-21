import React from 'react'
import styles from './Create.scss'

const Create = ({ createProject, handleChange, newProject, setView }) => (
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
        value={newProject.name}
      />
    </div>
    <div className={styles.field}>
      <button className={styles.button} onClick={createProject}>
        {'Submit'}
      </button>
    </div>
  </div>
)

export default Create
