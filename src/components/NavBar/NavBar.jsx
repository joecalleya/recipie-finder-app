import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "@reach/router";

export const NavBar = () => {
    return (
        <div className={styles.NavBar}>
        <Link to="/">
          <h1>Random Recipie Generator</h1>
          </Link>
          <Link to="SavedRecipies">
          <h1>SavedRecipies</h1>
          </Link>
        </div>
    )
}
export default NavBar;
