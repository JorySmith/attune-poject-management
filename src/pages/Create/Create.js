import { useState } from 'react'

// Styles
import './Create.css'

export default function Create() {
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])

  const handleSubmit = (e) => {
    // Prevent form submit default action
    e.preventDefault()
    console.log(name, details, dueDate)
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
          {/* select here */}
        </label>
        <label>
          <span>Assign To:</span>
          {/* select here */}
        </label>
        <button className='btn'>Add Project</button>
      </form>
    </div>
  )
}
