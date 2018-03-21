import React from 'react'
import styles from './List.scss'

const List = ({ accountAddress, addresses, projects, deleteProject }) => (
  <div>
    {!projects &&
      <span>(no projects)</span>
    }
    {projects &&
      <ul>
        {projects.map((project, index) => (
          <li key={addresses[index]}>
            <p>address: {addresses[index]}</p>
            <p>owner: {project.owner}</p>
            <p>name: {project.name}</p>
          </li>
        ))}
      </ul>
    }
  </div>
)

export default List
