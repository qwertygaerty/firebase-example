import { getApps, initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAHYojo-ARk04vfDB1fQ5JxvWKdtFA3vUs",
    authDomain: "sputnik-task-tracker.firebaseapp.com",
    databaseURL: "https://sputnik-task-tracker-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sputnik-task-tracker",
    storageBucket: "sputnik-task-tracker.appspot.com",
    messagingSenderId: "767101755102",
    appId: "1:767101755102:web:47b2616f7b9d1da0a6ac4f",
    measurementId: "G-68DBBM353R"
};

const apps = getApps()
const firebaseApp = !apps.length ? initializeApp(firebaseConfig) : apps[0]
const firebaseAuth = getAuth(firebaseApp)

const getCurrentUser = () => new Promise((resolve, reject) => {
    const unsub = onAuthStateChanged(firebaseAuth, user => {
        unsub()
        resolve(user)
    }, reject)
})

export { firebaseApp, firebaseAuth, getCurrentUser }
