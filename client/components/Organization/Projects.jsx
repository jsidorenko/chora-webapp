import React from 'react'
import Create from './Projects/Create'
import List from './Projects/List'
import styles from './Projects.scss'

const Projects = ({
  accountAddress,
  addresses,
  createProject,
  currentView,
  deleteProject,
  handleChange,
  newProject,
  projects,
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
      {'Projects'}
    </h2>
    {currentView === 'Create' &&
      <Create
        createProject={createProject}
        handleChange={handleChange}
        newProject={newProject}
      />
    }
    {currentView === 'List' &&
      <List
        accountAddress={accountAddress}
        addresses={addresses}
        deleteProject={deleteProject}
        projects={projects}
      />
    }
  </div>
)

export default Projects
