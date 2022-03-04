import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

// Styles
import './Signup.css'

export default function Signup() {
  // Track state of user submitted info
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)
  const { signup, isPending, error } = useSignup()

  // Form submit
  const handleSubmit = (e) => {
    // Prevent default action/page refresh after form submit
    e.preventDefault()

    // Signup with firebase with useSignup custom hook
    signup(email, password, displayName, thumbnail)
  }

  // Profile picture 
  const handleFileChange = (e) => {
    setThumbnail(null)

    // Store only the first image submitted in case user submits several
    let submittedImage = e.target.files[0]

    // File validation
    // No image file submitted
    if (!submittedImage) return setThumbnailError("Please submit an image")
    // Not an image, check file.type property
    if (!submittedImage.type.includes('image')) return setThumbnailError("Please submit an image")
    // Image too big, over 100kb, check file.size property
    if (submittedImage.size > 100000) return setThumbnailError("Please submit an image that's smaller than 100kb")
    
    // Validation passes, update error and thumbnail states
    setThumbnailError(null)
    setThumbnail(submittedImage)

  }

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label>
        <span>Email:</span>
        <input 
          required 
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email} />
      </label>
      <label>
        <span>Password:</span>
        <input 
          required 
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password} />
      </label>
      <label>
        <span>Display Name:</span>
        <input 
          required 
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName} />
      </label>
      <label>
        <span>Profile Picture:</span>
        <input 
          required 
          type="file"
          onChange={handleFileChange} />
          {/* Thumbnail validation error */}
          {thumbnailError && <div className='error'>{thumbnailError}</div>}
      </label>
      {/* Buttons */}
      {/* Display signup button until user submits form */}
      {!isPending && <button className='btn'>Sign Up</button>}     
      {isPending && <button disabled className='btn'>Loading...</button>}             
      {/* Display error if present */}
      {error && <div className='error'>{error}</div>}
    </form>
  )
}
