import { useParams } from 'react-router-dom'
import useDocument from '../../hooks/useDocument'
import ProjectSummary from './ProjectSummary'
import ProjectComments from './ProjectComments'

// Styles
import './Project.css'
import { Link } from 'react-router-dom'


export default function Project() {
  // Use useParams to get project id to retrieve project from DB
  const { id } = useParams()
  // Use project id to retrieve document with useDocument custom hook
  // useDocument add a realtime listener as wel
  const { document, error } = useDocument('projects', id)

  // Error handling and loading 
  if (error) return <div className='error'>{error}</div>
  if (!document) return <div className='loading'>Loading project...</div>

  return (
    <div className='project-details'>
      <h4>Project Details</h4>
      <ProjectSummary project={document} />
      <Link to={'/'}>
        <button className='btn'>⇐ Back to Dashboard</button>
      </Link>      
      <ProjectComments project={document} />
    </div>
  )
}
