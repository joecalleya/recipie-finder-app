import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavBar = (props) => {

  const { signIn, signOut, user } = props;


  const getSignInOutJsx = () => {
    return user ? (
      <span className={styles.faStyles}>
        <FontAwesomeIcon icon={"sign-out-alt"} onClick={signOut} />
      </span>
    ) : (
      <span className={styles.faStyles}>
        <FontAwesomeIcon icon={["fab", "google"]} onClick={signIn} />
      </span>
    );
  };

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
