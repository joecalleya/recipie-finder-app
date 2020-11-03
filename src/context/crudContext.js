import React, { createContext, useState, useContext, useEffect } from "react";
import { firestore } from "../firebase";
import { UserContext } from "./userContext";

export const CrudContext = createContext({});

export const CrudProvider = (props) => {

  const [favourites, setFavourites] = useState([]);
  const userContext = useContext(UserContext);
  
  const addToCookbook = (recipe) => {
    firestore
      .collection("recipes")
      .doc()
      .set({ ...recipe, uid: userContext.user.uid })
      .then(fetchCookbook)
      .catch((err) => console.log(err));
  };
  

  const fetchCookbook = () => {
    if (userContext.user) {
      firestore
        .collection("recipes")
        .get()
        .then((querySnapshot) => {
          const favourites = querySnapshot.docs
            .filter((doc) => doc.data().uid === userContext.user.uid)
            .map((doc) => doc.data());
          setFavourites(favourites);
        })
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    fetchCookbook();
    console.log(favourites);

  }, [])

  return (
    <CrudContext.Provider value={{ favourites, addToCookbook }}>
      {props.children}
    </CrudContext.Provider>
  )
}