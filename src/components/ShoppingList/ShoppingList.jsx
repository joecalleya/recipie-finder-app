import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ShoppingList.module.scss"

//set shopping list and checked items to emply so that they can be added to
let checkedList = [];
let shoppingList = [];

const ShoppingList = (props) => {


    const { recipe } = props;
    const [shoppingListUpdate, setShoppingListUpdate] = useState(false);

    //add ingredients to inital list
    if (recipe.ingredients && checkedList.length == 0) {
        shoppingList = [...recipe.ingredients];
    }

    const checkIngredientItem = (listToRemove,listToAdd,item,e) => {
        //when clicked remove shopping list item to other checked ingredients list
        e.preventDefault()
        listToRemove.splice(listToRemove.indexOf(item),1)
        listToAdd.push(item)
        setShoppingListUpdate(!shoppingListUpdate)
        };

        const shoppingListIterate = shoppingList ?
        shoppingList.map((item, index) =>
            <li key={index}>
                {item} 
                <FontAwesomeIcon icon={["fas", "check"]} onClick={(e) => checkIngredientItem(shoppingList,checkedList,item,e)} />
            </li>
        ):('None')

        const checkedListIterate = checkedList ?
        checkedList.map((item, index) =>
            <li className={styles.checked} key={index} onClick={(e) => checkIngredientItem(checkedList,shoppingList,item,e)}>
                {item} 
                <FontAwesomeIcon icon={["fas", "times"]}  />
            </li>
        ):('None')    

    return (
        <div className={styles.shoppingList}>
        <h1>Shopping List</h1>
            {shoppingListIterate}
        <h1>Checked Items</h1>
            {checkedListIterate}
        </div>
    )
}
export default ShoppingList;

