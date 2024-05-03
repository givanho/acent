import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from 'firebase/auth';
import Lottie from "lottie-react";
import loadingSquare from "../assets/loadingSquare.json"
import './context.css'

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isPending, setIsPending] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

   const signIn = (email, password) =>  {
    setIsPending(true); // Set isPending to true before the operation
    return signInWithEmailAndPassword(auth, email, password)
      .finally(() => setIsPending(false)); 
   }
   const forgotPassword = (email) =>{
    return sendPasswordResetEmail(auth, email);
  }
  const logout = () => {
      return signOut(auth)
  }
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      
      setUser(currentUser);
      setIsPending(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
if (isPending){
  return    <div class="overlay">
  <div class="centered-content">
  <Lottie animationData={loadingSquare} loop={true} />

  </div>
</div>
  
  
}
  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn,forgotPassword }}>

      {isPending ? <h1>i am Loading...</h1> : children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
