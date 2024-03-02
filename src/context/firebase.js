import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  
  initializeAuth, 
  
} from 'firebase/auth';
 const   FIRE_API = process.env.REACT_APP_FIRE_API;
   const  FIRE_AUTH = process.env.REACT_APP_FIRE_AUTH;
   const FIRE_PROJECT = process.env.REACT_APP_FIRE_PROJECT;
   const FIRE_STORAGE  = process.env.REACT_APP_FIRE_STORAGE;
  const FIRE_MESSAGING = process.env.REACT_APP_FIRE_MESSAGING
   const  FIRE_APP_ID = process.env.REACT_APP_FIRE_APP_ID

const firebaseConfig = {
    apiKey: `${FIRE_API}`,
    authDomain:`${FIRE_AUTH}`,
    projectId: `${FIRE_PROJECT}`,
    storageBucket: `${FIRE_STORAGE}`,
    messagingSenderId: `${FIRE_MESSAGING}`,
    appId: `${FIRE_APP_ID}`,
   
};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);

export const db = getFirestore(app)
export const storage = getStorage(app);