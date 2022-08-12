import React from "react"
import { Link } from 'react-router-dom'

const Navbar = ()=>{
    return(
        <nav>
        <header className="books-header">
          <h1> Bookstore CMS</h1>
        </header>
        <ul>
          <li><Link to="/">Books</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
      </nav>
    )
}

export default Navbar;
