import Avatar from "../../components/Avatar"
import { useFirestore } from "../../hooks/useFirestore"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useHistory } from "react-router-dom"
import { Link } from 'react-router-dom'

export default function ProjectSummary({ project }) {
  const { deleteDocument } = useFirestore('projects')
  const { user } = useAuthContext()
  const history = useHistory()


  const handleClick = (e) => {
    deleteDocument(project.id)
    // Redirect/push user to dashboard via useHistory
    history.push('/')
  }

  return (
    <div>
      <h4>Project Details</h4>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p className="project-creator">Project Creator: {project.createdBy.displayName}</p>
        <p className="due-date">
          Due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">
          {project.details}
        </p>
        <h4>Assigned to:</h4>
        <div className="assigned-users">
          {project.assignedUsersList.map(user => (
            <div key={user.id}>
              <Avatar src={user.photoURL} />
            </div>
          ))}
        </div>
      </div>
      <div>
        {user.uid === project.createdBy.id && (
          <button 
          className="btn complete-btn"
          onClick={handleClick}>Mark Project as Complete</button>
        )}
        <Link to={'/'}>
          <button className='btn back-btn'>⇐ Back to Dashboard</button>
        </Link>      
      </div>
        
    </div>
  )
}
