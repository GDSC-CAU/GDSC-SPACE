import { FirebaseApp, initializeApp } from '@firebase/app'
import { Firestore, getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    appId: process.env.FB_APP_ID,
}

let firebaseApp: FirebaseApp
let firebaseDB: Firestore

export const initFirebase = () => {
    firebaseApp = initializeApp(firebaseConfig)
    firebaseDB = getFirestore()
}
