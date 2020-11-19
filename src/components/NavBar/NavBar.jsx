import React, { useContext } from "react";
import styles from "./NavBar.module.scss";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../../context/userContext";


export const NavBar = (props) => {
  const userContext = useContext(UserContext);

  const {signIn, signOut, user} = userContext;

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
          <h1>Recipe Generator</h1>
          </Link>
          {getSignInOutJsx()}
          <Link to="SavedRecipies">
          <h1>Saved   Recipes</h1>
          </Link>
        </div>
    )
}
export default NavBar;
