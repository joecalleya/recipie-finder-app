import React from 'react'


const ShoppingList = (props) => {

    const {recipe} = props;


    const shoppingList = recipe.ingredients.length ? 
    recipe.ingredients.map((item,index) =>
                        <li key={index}>{item}</li> 
                )     
              
              : ('None')

    return (
        <div>
            <p>{shoppingList}</p>

        </div>
    )
}
export default ShoppingList;