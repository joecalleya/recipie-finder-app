import React, { useState, useEffect } from "react";
import './App.css';
import RecipieCard from "./components/RecipieCard";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Routes from "./containers/Routes/Routes.jsx";
import firebase, { provider } from "./firebase";
import "./data/fa-library";


let savedRecipies = [];

const App = () => {

  const [recipe, setRecipes] = useState([]);
  const [user, setUser] = useState(null);

  const saveRecipieToList = (item) => {
    savedRecipies.push(item)
  };
  
  console.log("APP",savedRecipies)

  const apiCall = () => {
    const grabRecipes = async () => {
      const request = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      const data = await request.json();
      return data;
    };
    grabRecipes().then(recipieData => {
      var recipe = recipieData.meals[0];
      setRecipes(recipe)
      return recipe;

})};
const getCleanedRecipes = (rawRecipes) => {
  return rawRecipes.map(meal => {
    // Missing step:  The goal of clean ingredients is to MAP the "strIngredient1" "strIngredient2" "strIngredient3" 
    // properties into an ARRAY of ingredients
    meal.ingredients = [];
    for (let i = 1; i < 21; i++) {
      const ingredient = meal['strIngredient' + i];
      if (ingredient) {
        meal.ingredients.push(ingredient);
      }        
    }
    return meal;
  })
}

const signIn = () => {
  firebase.auth().signInWithRedirect(provider);
};

const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      setUser(null);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getUser = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });
};

useEffect(() => { 
  getUser();
})

  return (
    
    <div className="App">
        <section>
          <NavBar 
          saveRecipieToList={saveRecipieToList} 
          savedRecipies={savedRecipies}  />
        </section>
        <section>
        <Routes 
        setRecipes={setRecipes}
        recipe={recipe}
        apiCall= {apiCall}
        saveRecipieToList={saveRecipieToList} 
        savedRecipies={savedRecipies} />
        </section>
    </div>
  );
}

export default App;
