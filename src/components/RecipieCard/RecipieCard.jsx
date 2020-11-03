import React, { useState, useContext } from "react";
import styles from "./RecipieCard.module.scss";
import { CrudContext } from "../../context/crudContext";


const RecipieCard = (props) => {
    
    const [saveState, setSaveState] = useState(false);
    const {recipe} = props;
    const crudContext = useContext(CrudContext);
    const { addToCookbook } = crudContext;

    console.log(recipe)

    const handleSaveClick = (e) => {
        e.stopPropagation();
        addToCookbook(props.recipe);

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
