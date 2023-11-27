import React from 'react';
import Search from './Search';
import SearchSuggestions from './SearchSuggestions';

function Home({ handleChange, searchKey, handleSearchKey, results, currPage, setCurrPage }) {
  setCurrPage('home');
  return (
    <main className='home'>
      <section>
        <article className='maintext'>If you love live performance and traveling, let us find venues for you ... wherever is on your bucket list.</article>
        <Search handleChange={handleChange} searchKey={searchKey} handleSearchKey={handleSearchKey} results={results} />
        <div id='searchResults'>{results && results.length > 0 ? <SearchSuggestions results={results} /> : null}</div>
      </section>
    </main>
  );
}

export default Home;
