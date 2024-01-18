import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  
  initializeAuth, 
 
} from 'firebase/auth';
// import {FIRE_API,FIRE_AUTH,FIRE_PROJECT,
//     FIRE_STORAGE,FIRE_MESSAGING,
//     FIRE_APP_ID,FIRE_MEASUREMENT} from "@env"

// const firebaseConfig = {
//     apiKey: `${FIRE_API}`,
//     authDomain:`${FIRE_AUTH}`,
//     projectId: `${FIRE_PROJECT}`,
//     storageBucket: `${FIRE_STORAGE}`,
//     messagingSenderId: `${FIRE_MESSAGING}`,
//     appId: `${FIRE_APP_ID}`,
//     measurementId: `${FIRE_MEASUREMENT}`
// };

const firebaseConfig = {
    apiKey: "AIzaSyAsVjFS3GVJUOS98av0e_lEe8Oiq0zakBo",
    authDomain: "ascent-investments.firebaseapp.com",
    projectId: "ascent-investments",
    storageBucket: "ascent-investments.appspot.com",
    messagingSenderId: "622433531247",
    appId: "1:622433531247:web:d713fc5057fe71e03ba49a"
  };

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app);