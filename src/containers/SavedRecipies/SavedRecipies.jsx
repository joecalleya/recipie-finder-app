import React, { useState } from "react";
import styles from "./SavedRecipies.module.scss";
import RecipieCard from "../../components/RecipieCard"


const SavedRecipies = (props) => {

  const {setRecipes, savedRecipies, saveRecipieToList} = props;

  console.log(savedRecipies)
  
  const [saved, setSaved] = useState(props); 

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