import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Styles
import './App.css'

// Pages and Components
import Dashboard from './pages/Dashboard/Dashboard'
import Create from './pages/Create/Create'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Project from './pages/Project/Project'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="container">
          <Navbar />
          <Switch>
            {/* force exact route match, 'exact' attribute for route */}
            <Route exact path='/'>
              <Dashboard />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/project/:id'>
              <Project />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>        
          </Switch>
        </div>        
      </BrowserRouter>
    </div>
  );
}

export default App
