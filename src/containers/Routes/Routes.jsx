import React from "react";
import { Router } from "@reach/router";

import App from "../../App";
import Favorites from "../../components/Favorites";
import NotFound from "../../components/NotFound";

const Routes = () => {
  return (
    <Router>
      <App path="/" />
      <Favorites path="favorites" />
      <NotFound default />
    </Router>
  );
};

export default Routes;
