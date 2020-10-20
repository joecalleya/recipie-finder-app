import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "@reach/router";

export const NavBar = () => {
    return (
        <div className={styles.NavBar}>
        <Link to="/">
          <h1>Random Recipie Generator</h1>
          </Link>
          <Link to="favorites">
          <h1>Favorites</h1>
          </Link>
        </div>
    )
}
export default NavBar;
