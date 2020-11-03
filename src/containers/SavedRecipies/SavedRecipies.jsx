import React, { useState, useEffect } from "react";
import styles from "./SavedRecipies.module.scss";
import RecipieCard from "../../components/RecipieCard"
import { firestore } from "../../firebase";


const SavedRecipies = (props) => {

  const {setRecipes, savedRecipies, saveRecipieToList} = props;

  console.log(savedRecipies)
  
  const [favourites, setFavourites] = useState([]);
  const { user } = props;

  const fetchCookbook = () => {
    firestore
      .collection("recipes")
      .get()
      .then((querySnapshot) => {
        const favourites = querySnapshot.docs
          .filter((doc) => doc.data().uid === user.uid)
          .map((doc) => doc.data());
          setFavourites(favourites);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCookbook();
  }, []);

  const contentJsx = savedRecipies.length ? 
  savedRecipies.map((item,index) =>
                  <RecipieCard  setRecipes={setRecipes}
                                key={index} 
                                recipe={item}/>
              )     
            
            : ('None Saved')

  return (
    <div >
    <section >
        <p>here are your Saved Items</p>

    </section>
    <section className={styles.cookbook}>{contentJsx}
    </section>
    </div>


  );
};

export default SavedRecipies;