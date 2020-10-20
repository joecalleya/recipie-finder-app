import React, { useState } from "react";
import './App.css';
import RecipieCard from "./components/RecipieCard";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Routes from "./containers/Routes/Routes.jsx";

const App = () => {

  const [recipe, setRecipes] = useState([]);

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
                          })
                            };
  
if (!recipe) apiCall();
                            
  return (
    
    <div className="App">
        <section>
          <NavBar />
        </section>
        <section className={styles.SectionButton}>
          <button className={styles.Button} type="button" text="Update" 
          onClick={() => setRecipes(null)}>Random Recipie</button>
        </section>
        <section>
        {recipe != null ? <RecipieCard recipe={recipe}/> : null}
        </section>
        <section>
        <Routes />
        </section>
    </div>
  );
}

export default App;
