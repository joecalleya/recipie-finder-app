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

  const apiCall = () => {
    const grabRecipes = async () => {
      const request = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      const data = await request.json();
      return data;
    };

    grabRecipes().then(recipieData => {
      var recipe = recipieData.meals[0];
      recipe = cleanRecipeData(recipe)
      setRecipes(recipe)
      return recipe;

    })
  };

  const cleanRecipeData = (recipe) => {
    const cleanedRecipe = {
      id: recipe.idMeal,
      name: recipe.strMeal,
      category: recipe.strCategory,
      area: recipe.strArea,
      instructions: recipe.strInstructions,
      thumbnail: recipe.strMealThumb,
      tags: recipe.strTags,
      ingredients: getIngredients(recipe),
      source: recipe.strSource,
      dateCreated: new Date().toUTCString(),
      dateModified: null,
      youtube: recipe.strYoutube,
      isFav: false,
    };
    return cleanedRecipe;
  };

  const getIngredients = (recipe) => {
    let ingredients = [];
    Object.keys(recipe).forEach((key) => {
      if (key.includes("Ingr") && recipe[key]) {
        ingredients.push(recipe[key]);
      }
    });
    return ingredients;
  };


  useEffect(() => {
    apiCall("");
  }, []);

  return (
    <UserProvider>
      <div className={styles.app}>
        <section>
          <NavBar
          />
        </section>
        <section>
          <CrudProvider>
            <Routes
              setRecipes={setRecipes}
              recipe={recipe}
              apiCall={apiCall}

            />
          </CrudProvider>
        </section>
      </div>
    </UserProvider>

  );
}

export default App;
