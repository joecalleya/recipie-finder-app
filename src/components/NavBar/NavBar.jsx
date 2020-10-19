import React from 'react'

export const NavBar = () => {
    return (
        <div>
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
