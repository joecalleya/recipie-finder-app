import React, { useState } from "react";
import styles from "./RecipieCard.module.scss";


const RecipieCard = (props) => {
    
    const [saveState, setSaveState] = useState(false);
    const {recipe, saveRecipieToList } = props;

    console.log(recipe)

    const handleSaveClick = (e) => {
        e.stopPropagation();
        setSaveState(!saveState);
        saveRecipieToList(props.recipe);

      };

    return (
        <div className={styles.RecipieCard}>
        <button onClick={handleSaveClick}>Save</button>
        <h1>{recipe.strMeal}</h1>;
        <img src={recipe.strMealThumb} alt="pic"/>
        <p>{recipe.strInstructions}</p>;
       </div>
      )
     };

export default RecipieCard;
