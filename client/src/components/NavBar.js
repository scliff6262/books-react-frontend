import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return(
    <div className="navbar navbar-expand-md navbar-dark bg-secondary">
      <NavLink className="navbar-brand abs" to="/">Bookshelf</NavLink>
      <div className="nav-item">
      <NavLink className="nav-link text-light" to="/search">Reading List</NavLink>
      </div>
      <div className="nav-item">
      <NavLink className="nav-link text-light" to="/search">Add to List</NavLink>
      </div>
      <div className="nav-item">
      <NavLink className="nav-link text-light" to="/complete">Completed Books</NavLink>
      </div>
    </div>
  )
}

export default NavBar
