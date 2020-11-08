import React, { useState, useEffect } from "react";
import RecipieCard from "./components/RecipieCard";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Routes from "./containers/Routes/Routes.jsx";
import firebase, { provider } from "./firebase";
import "./data/fa-library";
import { UserProvider } from "./context/userContext";
import { CrudProvider, CrudContext } from "./context/crudContext";


let savedRecipies = [];

const App = () => {

  const [recipe, setRecipes] = useState([]);
  const [user, setUser] = useState(null);

  console.log("APP",savedRecipies)

  const apiCall = () => {
    const grabRecipes = async () => {
      const request = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      const data = await request.json();
      return data;
    };
    grabRecipes().then(recipieData => {
      var recipe = recipieData.meals[0];
      recipe = getCleanedRecipes(recipe)
      setRecipes(recipe)
      return recipe;

})};
const getCleanedRecipes = (rawRecipes) => {
    // Missing step:  The goal of clean ingredients is to remove the "strIngredient1" "strIngredient2" "strIngredient3" 
    // properties into an ARRAY of ingredients
    rawRecipes.ingredients = [];
    for (let i = 1; i < 21; i++) {
      const ingredient = rawRecipes['strIngredient' + i];
      if (ingredient) {
        rawRecipes.ingredients.push(ingredient);
      }        
    }
    return rawRecipes;
  }

  return (
    <UserProvider>
      <div className="App">
          <section>
            <NavBar 
            // saveRecipieToList={saveRecipieToList} 
            // savedRecipies={savedRecipies}  
            />
          </section>
          <section>
          <CrudProvider>
            <Routes 
            setRecipes={setRecipes}
            recipe={recipe}
            apiCall= {apiCall}
            // saveRecipieToList={saveRecipieToList} 
            // savedRecipies={savedRecipies} 
            />          
          </CrudProvider>
          </section>
      </div>
    </UserProvider>

  );
}

export default App;
