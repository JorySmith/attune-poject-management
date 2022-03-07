const filterList = ['all', 'mine', 'development', 'design', 'marketing', 'sales']

export default function ProjectFilter({ filterOption, changeFilter }) {  

  // On button click, fire changeFilter with selected filter option
  const handleClick = (option) => {
    changeFilter(option)
  }

  return (
    <div className="project-filter">
      <nav>
        <p>Filter Projects By:</p>
        {/* Display filter options, apply active class to applicable button */}
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
