import { NavLink } from 'react-router-dom'
import Avatar from './Avatar'
import { useAuthContext } from '../hooks/useAuthContext'

// Styles and Images
import './Sidebar.css'
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'

const toggleMenu = () => {  
  const bar1 = document.getElementById('bar1')
  const bar2 = document.getElementById('bar2')
  const bar3 = document.getElementById('bar3')
  const menu = document.getElementById('menu')
  const sidebar = document.getElementById('sidebar')
  const sidebarContent = document.getElementById('sidebar-content')
  bar1.classList.toggle('change') 
  bar2.classList.toggle('change') 
  bar3.classList.toggle('change') 
  menu.classList.toggle('change') 
  sidebar.classList.toggle('change') 
  sidebarContent.classList.toggle('change') 
}

export default function Sidebar() {
  const { user } = useAuthContext()

  return (
    <div className='sidebar' id='sidebar'>
      <div className="menu" id='menu' onClick={toggleMenu}>
          <div className="bar1" id='bar1'></div>
          <div className="bar2" id='bar2'></div>
          <div className="bar3" id='bar3'></div>
      </div>
      <div className="sidebar-content" id='sidebar-content'>        
        <div className="user">
          <Avatar src={user.photoURL} />
          <p>Hi, {user.displayName}!</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              {/* Exact match for root links */}
              <NavLink exact to='/'>
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
