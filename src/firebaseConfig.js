// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore'

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import { GoogleAuthProvider} from "firebase/auth"




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL8Ftv3C0U3bSdvGEv43G9RykGRclAOpM",
  authDomain: "typing-speed-tracker.firebaseapp.com",
  projectId: "typing-speed-tracker",
  storageBucket: "typing-speed-tracker.appspot.com",
  messagingSenderId: "271531195477",
  appId: "1:271531195477:web:209ec68e12d4a0101828dc",
  measurementId: "G-PZJQJ2M1DM"
};

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// //const analytics = getAnalytics(app);
// const auth = firebase.auth();
// const db = app.firestore();

const firebaseapp =firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const db = firebaseapp.firestore();
const provider = new GoogleAuthProvider();


export {db,auth,provider}
