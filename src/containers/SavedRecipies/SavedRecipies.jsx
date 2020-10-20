import React from "react";
import styles from "./SavedRecipies.module.scss";
import RecipieCard from "../../components/RecipieCard"


const SavedRecipies = (props) => {

  // const {savedRecipies} = props;

  console.log('Saved',props);

  
  const contentJsx = props.length ? 
  (<RecipieCard recipe={props}/>) : ('None Saved')
  console.log('Saved',props)

  return (
    <div >
    <section >
        <h2>SavedRecipies Recipies </h2>
        <p>here are your Saved Items</p>

    </section>
    <section className={styles.cookbook}>{contentJsx}
    </section>
    </div>


  );
};

export default SavedRecipies;
