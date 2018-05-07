import React from 'react'
import styles from './Settings.scss'

const Settings = ({
  deleteOrganization,
}) => (
  <div className={styles.content}>
    <h2>
      {'Settings'}
    </h2>
    <p>
      {'Only organization owner has access to settings.'}
    </p>
    <div className={styles.buttons}>
      <button className={styles.button} onClick={deleteOrganization}>
        {'Delete Organization'}
      </button>
    </div>
  </div>
)

export default Settings
