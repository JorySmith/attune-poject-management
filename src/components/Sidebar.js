import { NavLink } from 'react-router-dom'

// Styles and Images
import '/.Sidebar.css'
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar-content">
        <div className="user">
          {/* avatar and username here */}
          <p>Hi user</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink to='/'>
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/create'>
                <img src={AddIcon} alt="add a project icon" />
                <span>Add Project</span>
              </NavLink>
            </li>
          </ul>          
        </nav>
      </div>
    </div>
  )
}
