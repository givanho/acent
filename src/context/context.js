import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from './firebase'; // Ensure db is imported
import { doc, onSnapshot } from 'firebase/firestore';
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
  const [user, setUser] = useState(null);
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

// 2. Monitor Firestore "Disabled" Status
  useEffect(() => {
    let unsubSnapshot = () => {}; // Initialize as empty function

    if (user && user.uid) {
      unsubSnapshot = onSnapshot(doc(db, "users", user.uid), (snapshot) => {
        if (snapshot.exists() && snapshot.data().status === 'disabled') {
          logout(); // Use the logout function defined above
          alert("Your account has been deactivated by an admin.");
        }
      }, (error) => {
        console.error("Status listener error:", error);
      });
    }

    return () => unsubSnapshot();
  }, [user]);



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
