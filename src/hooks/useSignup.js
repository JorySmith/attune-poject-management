import { useState, useEffect } from "react";
import { projectAuth, projectStorage, projectFirebase } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName, thumbnail) => {
    setError(null);
    setIsPending(true);

    try {
      // Signup with firebase auth
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        throw new Error("Could not complete signup");
      }
      // Upload user thumbnail to firebase using their user.uid and thumbnail.name
      // Firebase filepath, then projectStore.ref(filepath).put(thumbnail)
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`
      const img = await projectStorage.ref(uploadPath).put(thumbnail)

      // Store imgUrl location via img.ref.getDownloadURL()
      const imgUrl = await img.ref.getDownloadURL()

      // Update user profile with display name and profile photoURL async
      await res.user.updateProfile({ displayName, photoURL: imgUrl });

      // Create/set a firestore user document using user.uid in the 'users' collection async
      await projectFirebase.collection('users').doc(res.user.uid).set({
        online: true, // login status
        displayName,
        photoURL: imgUrl
      })

      // Dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signup, error, isPending };
};
