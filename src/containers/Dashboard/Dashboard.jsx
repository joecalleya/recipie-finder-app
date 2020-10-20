import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import RecipieCard from "../../components/RecipieCard"

const DashBoard = () => {

  const [recipe, setRecipes] = useState([]);

  const apiCall = () => {
    const grabRecipes = async () => {
      const request = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      const data = await request.json();
      return data;
    };

    grabRecipes().then(recipieData => {
      var recipe = recipieData.meals[0];
      setRecipes(recipe)
      return recipe;
                          })
                            };
  
if (!recipe) apiCall();

  return (
    
    <div className="d">
        <section className={styles.SectionButton}>
          <button className={styles.Button} type="button" text="Update" 
          onClick={() => setRecipes(null)}>Random Recipie</button>
        </section>
        <section>
        {recipe != null ? <RecipieCard recipe={recipe}/> : null}
        </section>
    </div>
  );

};

export default DashBoard;
