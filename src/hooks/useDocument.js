import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

// Pass in collection name and doc id to get data
export default function useDocument(collection, id) {
  const [document, setDocument] = useState(null)
  const [error, setError] = useState(null)

  // Realtime listener onSnapshot() for firestore documents
  // Store a ref to collection name and doc id
  useEffect(() => {
    const ref = projectFirestore.collection(collection).doc(id)
  
    // onSnapshot returns an unsubscribe function, store it to be used later as a clean up function
    // It also returns a snapshot of the data and an error message if present
    const unsubscribe = ref.onSnapshot(snapshot => {
      // Spread snapshot data object into document state
      // Also pass in snapshot id
      setDocument({...snapshot.data(), id: snapshot.id})
      setError(null) 
    }, (err) => {
      console.log(err.message)
      setError("Failed to get the document")
    })

    // Cleanup function when component unmounts via unsubscribe
    return () => unsubscribe()

  }, [collection, id])
  
  // Return document and error message
  return { document, error }
}
