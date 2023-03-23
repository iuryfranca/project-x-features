import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { Timestamp, getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// import 'firebase/compat/auth'
// import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBsjYAOJdhk6aW2wJlt7OLANS1TdXKM-iY",
  authDomain: "projeto-x-features.firebaseapp.com",
  projectId: "projeto-x-features",
  storageBucket: "projeto-x-features.appspot.com",
  messagingSenderId: "452767843699",
  appId: "1:452767843699:web:c2bd86d836af5b2b50f106",
}

const app = initializeApp(firebaseConfig)
const projectFirestore = getFirestore(app)
const projectAuth = getAuth()
const projectStorage = getStorage(app)
const timestampNow = Timestamp.now().toDate()

export { projectFirestore, projectAuth, projectStorage, timestampNow }
