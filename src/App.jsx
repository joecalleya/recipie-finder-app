import React from "react";
import './App.css';
import RecipieCard from "./components/RecipieCard";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Routes from "./containers/Routes/Routes.jsx";

const App = () => {

  let saveState = []                        
  return (
    
    <div className="App">
        <section>
          <NavBar />
        </section>
        <section>
        <Routes recipe={saveState} />
        </section>
    </div>
  );
}

export default App;
