import React from "react";
import { Router } from "@reach/router";

import App from "../../App";
import Favorites from "../../components/Favorites";

const Routes = () => {
  return (
    <Router>
      <App path="/" />
      <Favorites path="favorites" />
    </Router>
  );
};

export default Routes;
