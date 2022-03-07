import { useCollection } from '../../hooks/useCollection'
import ProjectList from '../../components/ProjectList'
import ProjectFilter from './ProjectFilter'

// Styles
import './Dashboard.css'

export default function Dashboard() {
  // Pass collection name 'projects' to get its documents
  const { documents, error } = useCollection('projects')


  return (
    <div>
      <h2 className='page-title'>Dashboard</h2>
      {error && <p className='error'>{error}</p>}
      {documents && <ProjectFilter />}
      {documents && <ProjectList projects={documents} />}
    </div>
  )
}
