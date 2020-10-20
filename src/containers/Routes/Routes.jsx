import React from "react";
import { Router } from "@reach/router";
import SavedRecipies from "../SavedRecipies";
import NotFound from "../../components/NotFound";
import Dashboard from "../Dashboard";


const Routes = (props) => {
  const {savedRecipies} = props;
  console.log('Routes',props);


  return (

    <Router>
      <Dashboard path="/" />
      <SavedRecipies path="SavedRecipies" recipe={savedRecipies} />
      <NotFound default />
    </Router>
  );
};

export default Routes;
