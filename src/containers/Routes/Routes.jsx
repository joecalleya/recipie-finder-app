import React from "react";
import { Router } from "@reach/router";
import SavedRecipies from "../SavedRecipies";
import NotFound from "../../components/NotFound";
import Dashboard from "../Dashboard";
import { firestore } from "../../firebase";
// import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


const Routes = (props) => {
  
  const {user,setRecipes, recipe, apiCall, saveRecipieToList, savedRecipies} = props;

  const addToCookbook = (recipe) => {
    firestore
      .collection("recipes")
      .doc(recipe.id + user.uid)
      .set({ ...recipe, uid: user.uid });
  };


  return (

    <Router>
      <Dashboard path="/" 
      setRecipes={setRecipes}
      recipe={recipe}
      apiCall= {apiCall}
      addToCookbook={addToCookbook} />
      <SavedRecipies 
      path="SavedRecipies" 
      addToCookbook={addToCookbook} 
      savedRecipies={savedRecipies}/>
      <NotFound default />
    </Router>
  );
};

export default Routes;
