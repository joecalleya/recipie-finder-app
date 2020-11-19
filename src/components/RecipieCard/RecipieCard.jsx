import React, { useState, useContext } from "react";
import styles from "./RecipieCard.module.scss";
import { CrudContext } from "../../context/crudContext";
import ShoppingList from '../ShoppingList'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const RecipieCard = (props) => {
  const crudContext = useContext(CrudContext);
  const { recipe } = props;
  const { ingredients, name, instructions, isFav } = recipe;
  const [isFavorite, setIsFavorite] = useState(false);
  const { toggleFav, addToSaved, favourites, removeFromSaved } = crudContext;

  const [favState, setFavState] = useState(isFav);


  const handleClick = (e) => {
    e.stopPropagation();
    toggleFav(recipe);
    setFavState(!isFav);
  };

  const saveIcon = isFav ? styles.fontAwesomeFavorite : styles.fontAwesome;

  return (
    <div className={styles.RecipieCard}>

      <div className={styles.banner}>
        <div className={styles.image}>
          <img className={styles.responsiveImage} src={recipe.thumbnail} alt="pic" />
        </div>
        <h1>{recipe.name}</h1>
        <div className={styles.list}>
          <ShoppingList recipe={props.recipe} />
        </div>
        <FontAwesomeIcon className={`${saveIcon}`} icon={["fas", "save"]} onClick={handleClick}/>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  )
};

export default RecipieCard;
