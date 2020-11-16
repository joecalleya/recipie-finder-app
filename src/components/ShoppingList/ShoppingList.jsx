import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ShoppingList.module.scss"

const ShoppingList = (props) => {

    const [itemChecked, setItemChecked] = useState(false);

    const { recipe } = props;

    let ingredients = [];
    if (recipe.ingredients) {
        ingredients.push(...recipe.ingredients);
    }
    const checkBox = (e) => {
        e.preventDefault();
        // setItemChecked(!itemChecked);
    };

    // const conditionalCheckBox = (itemChecked == false) ? styles.CheckBox : "";

    const shoppingListIterate = recipe.ingredients ?
        ingredients.map((item, index) =>
            <li key={index}>{item}

                <FontAwesomeIcon 
                // className={`${conditionalCheckBox}`} 
                icon={["fas", "check"]} onClick={checkBox} />
            </li>
        )
        : ('None Saved')

    return (
        <ul>
            {shoppingListIterate}
        </ul>
    )
}
export default ShoppingList;

