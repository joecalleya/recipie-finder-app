import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import RecipieCard from "../../components/RecipieCard"

const DashBoard = (props) => {

  const {setRecipes ,recipe , apiCall , addToCookbook} = props;

  // const [recipe, setRecipes] = useState([]);


  if (!recipe) apiCall();

  return (
    
    <div className="d">
        <section className={styles.SectionButton}>
          <button className={styles.Button} type="button" text="Update" 
          onClick={() => setRecipes(null)}>Random Recipie</button>
        </section>
        <section>
        {recipe != null ? <RecipieCard 
        recipe={recipe} 
        addToCookbook={addToCookbook}/> : null}
        </section>
    </div>
  );

};

export default DashBoard;
