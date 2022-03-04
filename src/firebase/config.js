import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCqlnSPmfIzMeeZQ4MopFrlSqe4UspyoNo",
    authDomain: "attune-project-management.firebaseapp.com",
    projectId: "attune-project-management",
    storageBucket: "attune-project-management.appspot.com",
    messagingSenderId: "376105874201",
    appId: "1:376105874201:web:cf32b1305ce8cc2a320b88"
  };

  // Initialize firebase with firebaseConfig
  firebase.initializeApp(firebaseConfig)

  // Initialize services/instance of firestore() and auth()
  const projectFirebase = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  // Store firestore Timestamp
  const timestamp = firebase.firestore.Timestamp

  // Export services
  export { projectFirebase, projectAuth, timestamp, projectStorage}