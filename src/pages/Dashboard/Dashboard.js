import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useState } from "react"
import ProjectList from '../../components/ProjectList'
import ProjectFilter from './ProjectFilter'

// Styles
import './Dashboard.css'

export default function Dashboard() {
  // Pass collection name 'projects' to get its documents
  const { documents, error } = useCollection('projects')
  const { user } = useAuthContext()
  const [filterOption, setFilterOption] = useState('all')

  // Change filter on user click function
  // Pass function to ProjectFilter.js
  const changeFilter = (newFilter) => {
    setFilterOption(newFilter)
  }

  // Filter projects based on filterOption using switch case
  // See if documents are available first, if not, return null
  const projects = documents ? documents.filter((project) => {
    switch (filterOption) {
      case 'all':
        return true
      case 'mine':
        let mine = false
        project.assignedUsersList.forEach((assignedUser) => {
          if (user.uid === assignedUser.id) mine = true;
        })
        return mine
      case 'development':
      case 'design':
      case 'sales':
      case 'marketing':
        console.log(project.category, filterOption)
        return project.category === filterOption
      default:
        return true
    }
  }) : null


  return (
    <div>
      <h2 className='page-title'>Dashboard</h2>
      {error && <p className='error'>{error}</p>}
      {projects && (
        <ProjectFilter filterOption={filterOption} changeFilter={changeFilter}/>)}
      {projects && <ProjectList projects={projects} />}      
    </div>
  )
}
