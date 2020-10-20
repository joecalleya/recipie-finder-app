import React from "react";
import styles from "./RecipieCard.module.scss";


const RecipieCard = (props) => {
     const { recipe } = props;

    console.log("props",recipe)

            return (
                <div className={styles.RecipieCard}>
                    {recipe.strInstructions}
                </div>
                    )
        };

export default RecipieCard;
