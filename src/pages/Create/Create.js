import { useState } from 'react'
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
  // React-Select: Users Options
  const { documents } = useCollection('users')
  console.log(documents)

  const handleSubmit = (e) => {
    // Prevent form submit default action
    e.preventDefault()
    console.log(name, details, dueDate, category.value)
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
          {/* select here */}
          {/* <Select 
            options={}
          /> */}
        </label>
        <button className='btn'>Add Project</button>
      </form>
    </div>
  )
}
