import { useCollection } from '../hooks/useCollection'

// Components
import Avatar from './Avatar'

// Styles
import './OnlineUsers.css'

export default function OnlineUsers() {
  // useCollection requires collection name argument 
  const { documents, error } = useCollection('users')


  return (
    <div className='user-list'>
      <h2>Registered Users</h2>
      {error && <div className='error'>{error}</div>}
      {documents && documents.map(user => (
        <div key={user.id} className="user-list-item">
          {user.online && <span className='online-user'></span>}{!user.online && <span className='offline-user'></span>}
          <span>{user.displayName}</span>
          <Avatar src={user.photoURL} />
        </div>
      ))}
    </div>
  )
}
