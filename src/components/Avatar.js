import './Avatar.css'

// Pass in user.photoURL as src argument
export default function Avatar({ src }) {
  return (
    <div className='avatar'>
      <img src={src} alt="user profile avatar" />
    </div>
  )
}
