import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return(
    <div className="navbar navbar-expand-md navbar-dark bg-secondary">
      <NavLink className="navbar-brand abs" to="/">BookShelf</NavLink>
      <div className="nav-item">
      <NavLink className="nav-link text-light" to="/search">Search</NavLink>
      </div>
      <div className="nav-item">
      <NavLink className="nav-link text-light" to="/collection">My Collection</NavLink>
      </div>
    </div>
  )
}

export default NavBar
