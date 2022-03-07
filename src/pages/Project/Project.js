import { useParams } from 'react-router-dom'
import useDocument from '../../hooks/useDocument'
import ProjectSummary from './ProjectSummary'
import ProjectComments from './ProjectComments'

// Styles
import './Project.css'


export default function Project() {
  // Use useParams to get project id to retrieve project from DB
  const { id } = useParams()
  // Use project id to retrieve document with useDocument custom hook
  const { document, error } = useDocument('projects', id)

  // Error handling and loading 
  if (error) return <div className='error'>{error}</div>
  if (!document) return <div className='loading'>Loading project...</div>

  return (
    <div className='project-details'>
      <ProjectSummary project={document} />
      <ProjectComments project={document} />
    </div>
  )
}
