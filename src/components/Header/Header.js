import React from 'react';
import { Link } from 'react-router-dom';

function Header({ pageTitle, currPage }) {
  return (
    <header id='header'>
      <section className='flexbox'>
        <h1>{pageTitle}</h1>
        <nav>
          <Link to='/' className={currPage + ' homelink'}>
            Home
          </Link>
          <Link to='/about' className={currPage + ' aboutlink'}>
            About
          </Link>
        </nav>
      </section>
    </header>
  );
}

export {Header};
