import React from "react";
import { Router } from "@reach/router";
import SavedRecipies from "../SavedRecipies";
import NotFound from "../../components/NotFound";
import Dashboard from "../Dashboard";


const Routes = (props) => {
  
  const {setRecipes, recipe, apiCall, saveRecipieToList, savedRecipies} = props;

  return (

    <Router>
      <Dashboard path="/" 
      setRecipes={setRecipes}
      recipe={recipe}
      apiCall= {apiCall}
      saveRecipieToList={saveRecipieToList} 
      savedRecipies={savedRecipies}/>
      <SavedRecipies 
      path="SavedRecipies" 
      saveRecipieToList={saveRecipieToList} 
      savedRecipies={savedRecipies}/>
      <NotFound default />
    </Router>
  );
};

export default Routes;
