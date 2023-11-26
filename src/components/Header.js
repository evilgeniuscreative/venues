import React from 'react';
import { Link } from 'react-router-dom';
import Routers from '../router/routers';

function Header() {
  return (
    <header>
      <h1>Page</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
    </header>
  );
}

export default Header;
