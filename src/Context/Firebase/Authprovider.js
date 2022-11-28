import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

  ////////////////////////////////////
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setloading(false);
    });
    return () => unsubscribe();
  }, []);

  ///////////////////////////////////////
  const signup = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //////////////////////////////////////
  const login = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  ///////////////////////////////////////
  const updateUser = (updateinfo) => {
    return updateProfile(auth.currentUser, updateinfo);
  };
  /////////////////////////////////////////
  const logout = () => {
    setloading(true);
    return signOut(auth);
  };

  /////////////////////////////

  const authinfo = { signup, login, user, logout, updateUser, loading };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
