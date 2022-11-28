import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);

  ////////////////////////////////////
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      //   setloading(false);
    });
    return () => unsubscribe();
  }, []);

  ///////////////////////////////////////
  const signup = (email, password) => {
    // setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //////////////////////////////////////
  const login = (email, password) => {
    // setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  /////////////////////////////////////////
  const logout = () => {
    // setloading(true);
    return signOut(auth);
  };

  /////////////////////////////

  const authinfo = { signup, login, user, logout };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
