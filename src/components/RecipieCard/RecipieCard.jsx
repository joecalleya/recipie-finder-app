import React, { useState, useContext } from "react";
import styles from "./RecipieCard.module.scss";
import { CrudContext } from "../../context/crudContext";
import ShoppingList from '../ShoppingList'

const RecipieCard = (props) => {
    
  
    const [saveState, setSaveState] = useState(false);
    const {recipe} = props;
    const crudContext = useContext(CrudContext);
    const { addToCookbook, removeFromCookbook } = crudContext;

    const handleSaveClick = (e) => {
        e.stopPropagation();
        addToCookbook(props.recipe);
      };

      const handleUnSaveClick = (e) => {
        e.stopPropagation();

        removeFromCookbook(props.recipe);
      };

    return (
        <div className={styles.RecipieCard}>
        <button onClick={handleSaveClick}>Save</button>
        <button onClick={handleUnSaveClick}>UnSave</button>
        <div className={styles.banner}>
            <div className={styles.image}>
              <img className={styles.responsiveImage} src={recipe.strMealThumb} alt="pic"/>
            </div>
            <h1>{recipe.strMeal}</h1>;
            <p>{recipe.strInstructions}</p>;
            <ShoppingList
                    recipe={recipe} 
                    />
        </div>
       </div>
      )
     };

export default RecipieCard;
