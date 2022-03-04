import { useState, useEffect } from 'react'
import Select from 'react-select'
import { useCollection } from '../../hooks/useCollection'

// Styles
import './Create.css'

// React-Select Package: Category Options 
const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' }
]


export default function Create() {
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])
  const [users, setUsers] = useState([])
  const [formError, setFormError] = useState(null)

  // React-Select: Users Options
  const { documents } = useCollection('users')

  // Get list of registered users
  useEffect(() => {
    if (!documents) return;
    const options = documents.map(user => {
      return { value: user, label: user.displayName}
    })
    setUsers(options)

  }, [documents])
  

  const handleSubmit = (e) => {
    // Prevent form submit default action
    e.preventDefault()
    setFormError(null)

    // If no category selected or no users to be assigned, return error
    if (!category) return setFormError('Please select a project category')
    if (assignedUsers.length < 1) return setFormError('Please assign the project to at least one user')

    console.log(name, details, dueDate, category.value, assignedUsers)
  }

  return (
    <div className='create-form'>
      <h2 className='page-title'>Create a New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project Name:</span>
          <input 
            type="text" 
            required 
            onChange={(e) => setName(e.target.value)}
            value={name} />
        </label>
        <label>
          <span>Project Details:</span>
          <textarea 
            type="text" 
            required 
            onChange={(e) => setDetails(e.target.value)}
            value={details}></textarea>
        </label>
        <label>
          <span>Due Date:</span>
          <input 
            type="date" 
            required 
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate} />
        </label>
        <label>
          <span>Project Category:</span>
          {/* React-Select categories here */}
          <Select
            options={categories}
            onChange={(option) => setCategory(option)} />
        </label>
        <label>
          <span>Assign To:</span>
          {/* React-Select users here, ensure isMulti attribute */}
          <Select 
            options={users}
            onChange={(option) => setAssignedUsers(option)}
            isMulti />
        </label>        
        <button className='btn'>Add Project</button>
        {formError && <div className='error'>{formError}</div>}
      </form>
    </div>
  )
}
