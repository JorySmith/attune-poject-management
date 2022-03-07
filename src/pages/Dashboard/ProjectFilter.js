import { useState } from "react"

const filterList = ['all', 'mine', 'development', 'design', 'marketing', 'sales']

export default function ProjectFilter() {
  const [filterOption, setFilterOption] = useState('all')

  const handleClick = (option) => {
    setFilterOption(option)
    console.log(option)
  }

  return (
    <div className="project-filter">
      <nav>
        <p>Filter Projects By:</p>
        {/* Display filter options */}
        {filterList.map(option => (
          <button 
            key={option} 
            className={filterOption === option ? 'active' : ''}
            onClick={() => handleClick(option)}>
              {option}
          </button>
        ))}
      </nav>
    </div>
  )
}
