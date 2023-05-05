import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {

  apiKey: `${process.env.REACT_APP_API_KEY}`,

  authDomain: "portfolio-6b1fa.firebaseapp.com",

  projectId: "portfolio-6b1fa",

  storageBucket: "portfolio-6b1fa.appspot.com",

  messagingSenderId: "417124294769",

  appId: "1:417124294769:web:517649707aa8fc9622fbd0",

  measurementId: "G-0YRDJZY4KD"

};

  
  

  const app = initializeApp(firebaseConfig)

 export const db = getFirestore(app)