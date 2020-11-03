import React from "react";
import { Router } from "@reach/router";
import SavedRecipies from "../SavedRecipies";
import NotFound from "../../components/NotFound";
import Dashboard from "../Dashboard";
import { firestore } from "../../firebase";
// import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


const Routes = (props) => {
  
  const {setRecipes, recipe, apiCall, savedRecipies} = props;

  return (

    <Router>
      <Dashboard path="/" 
      setRecipes={setRecipes}
      recipe={recipe}
      apiCall= {apiCall}
      // addToCookbook={addToCookbook} 
      />
      <SavedRecipies 
      path="SavedRecipies" 
      // addToCookbook={addToCookbook} 
      savedRecipies={savedRecipies}
      />
      <NotFound default />
    </Router>
  );
};

export default Routes;
