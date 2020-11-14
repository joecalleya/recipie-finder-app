import React, { createContext, useState, useEffect } from 'react';
import firebase, { provider } from "../firebase";

// allows us to create a context
// gives us Provider and Consumer
export const UserContext = createContext({});

export const UserProvider = (props) => {

  // state and user relevant function extracted from App.jsx
  const [user, setUser] = useState(null);

  const signIn = () => {
    console.log('signing in');
    
    firebase.auth().signInWithRedirect(provider);
  };

  const signOut = () => {
    console.log('signing out');
    
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  useEffect(() => { 
    getUser();
  })

  return (
    <UserContext.Provider value={{ user, signIn, signOut }}>
      {props.children}
    </UserContext.Provider>
  )
}