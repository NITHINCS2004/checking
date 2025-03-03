/*import firebase from 'firebase/compact/app'
import 'firebase/compact/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAC-ctJEZ82MtRQhokgtO3JE-QN-Ggd2eM",
    authDomain: "gen-lang-client-0724194648.firebaseapp.com",
    projectId: "gen-lang-client-0724194648",
    storageBucket: "gen-lang-client-0724194648.firebasestorage.app",
    messagingSenderId: "486340617177",
    appId: "1:486340617177:web:6d3b11fc0888f95691efc8",
    measurementId: "G-6XKYG227WP"
  };

  const app=firebase.initializeApp(firebaseConfig)
  export const db=firebase.firestore(app)*/

  // firebaseConfig.js
  import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and export
const db = getFirestore(app);

export { db, app };
