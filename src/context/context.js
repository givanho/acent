import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  
} from 'firebase/auth';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isPending, setIsPending] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

   const signIn = (email, password) =>  {
    return signInWithEmailAndPassword(auth, email, password)
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
  return <>loading...</>
}
  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn,forgotPassword }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
