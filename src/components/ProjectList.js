import { Link } from 'react-router-dom'
import Avatar from './Avatar'

// Styles
import './ProjectList.css'

export default function ProjectList({ projects }) {
  return (
    <div className='project-list'>
      {projects.length === 0 && <p>No projects at the moment.</p>}
      {projects.map(project => (
        <Link key={project.id} to={`/projects/${project.id}`}>
          <h4>{project.name}</h4>
          {/* Convert JSON dueDate to JS date obj then to date string */}
          <p>Due by {project.dueDate.toDate().toDateString()}</p>
          <div className='assigned-to'>
            <p><strong>Assigned to:</strong></p>
            <ul>
              {project.assignedUsersList.map(user => (
                <li key={user.photoURL}>
                  <Avatar src={user.photoURL} />  
                </li>                       
              ))}
            </ul> 
          </div>
        </Link>
      ))}
    </div>
  )
}
