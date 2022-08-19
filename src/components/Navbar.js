import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <header className="books-header">
      <h1> Bookstore CMS</h1>
    </header>
    <ul className="links-wraper">
      <li><Link to="/" className="Books">BOOKS</Link></li>
      <li><Link to="/categories" className="Categories">CATEGORIES</Link></li>
    </ul>
  </nav>
);

export default Navbar;
