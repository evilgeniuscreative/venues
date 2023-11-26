import React from 'react';
import Search from './Search';
import SearchSuggestions from './SearchSuggestions';

function Home({ handleChange, searchKey, handleSearchKey, results }) {
  return (
    <>
      <section>
        <h1>Welcome to the Venue Finder!</h1>
        <Search handleChange={handleChange} searchKey={searchKey} handleSearchKey={handleSearchKey} results={results} />
        <div id='searchResults'>{results && results.length > 0 ? <SearchSuggestions results={results} /> : null}</div>
      </section>
    </>
  );
}

export default Home;
