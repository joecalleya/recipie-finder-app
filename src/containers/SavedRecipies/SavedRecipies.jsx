import React, { useContext } from "react";
import styles from "./SavedRecipies.module.scss";
import RecipieCard from "../../components/RecipieCard"
import { firestore } from "../../firebase";
import { CrudContext } from "../../context/crudContext";


const SavedRecipies = (props) => {
  const crudContext = useContext(CrudContext);
  const { favourites } = crudContext;
  console.log(favourites)

  const contentJsx = favourites.length ? 
  favourites.map((item,index) =>
                  <RecipieCard  
                                key={index} 
                                recipe={item}/>
              )     
            
            : ('None Saved')

  return (
    <div >
    <section >
        <p>Saved...</p>

    </section>
    <section className={styles.cookbook}>{contentJsx}
    </section>
    </div>


  );
};

export default SavedRecipies;