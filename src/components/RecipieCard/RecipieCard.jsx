import React, { useState } from "react";
import styles from "./RecipieCard.module.scss";


const RecipieCard = (props) => {
     const { recipe } = props;
    //  const [props, setProps] = useState([]);
    //  setRecipes(props)
    //  const {idMeal, strMeal, } = recipe;
    // {recipe.map(item => <div>{item.strMeal}</div>)}
    console.log("props",recipe)

            return (
                <div className={styles.RecipieCard}>
                    {recipe}
                </div>
                    )
        };

export default RecipieCard;
