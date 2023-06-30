import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, EmailAuthProvider} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";



   const firebaseConfig =  {
  apiKey: "AIzaSyBtRwfUZD9zaaibRRlRz_ueUONHOsPC7Os",
  authDomain: "chatter-8730f.firebaseapp.com",
  projectId: "chatter-8730f",
  storageBucket: "chatter-8730f.appspot.com",
  messagingSenderId: "881066718139",
  appId: "1:881066718139:web:a61dc3f8606db10f24ca9e",
  measurementId: "G-DDKMTNLJPY"
}



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const mailProvider = new EmailAuthProvider()
const db = getFirestore(app)

export {analytics, auth, googleProvider, mailProvider, db}