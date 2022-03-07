import { useState } from "react"
import { timestamp } from "../../firebase/config"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useFirestore } from "../../hooks/useFirestore"

export default function ProjectComments({ project }) {
  const [newComment, setNewComment] = useState('')
  const { user } = useAuthContext()
  const { updateDocument, response } = useFirestore('projects')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Store submitted comment
    const comment = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random()
    }
    
    // Update firebase document comments array with the new comment
    // Take current comment state via spread operator, add new comment
    await updateDocument(project.id, {
      comments: [...project.comments, comment]
    })
    // Error handling, clear add a comment textarea to a blank string
    if (!response.error) setNewComment('')
  }

  return (
    <div className="project-comments">
      <h4>Project Comments</h4>

      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add A Comment:</span>
          <textarea 
            required 
            onChange={e => setNewComment(e.target.value)}
            value={newComment}></textarea>
        </label>
        <button className="btn">Submit Comment</button>   
      </form>
    </div>
  )
}
