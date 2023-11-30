import React, { useContext, useEffect } from 'react';
import Search from './Search';
import { DataContext } from '../Contexts/DataContext';
import SearchSuggestions from './SearchSuggestions';

function Home() {
  const { results, setCurrPage } = useContext(DataContext);

  useEffect(() => {
    setCurrPage('home');
  }, [setCurrPage]);
  return (
    <main className='home'>
      <section>
        <article className='maintext'>If you love live performance and traveling, let us find venues for you ... wherever is on your bucket list.</article>
        <Search />
        <div id='searchResults'>{results && results.length > 0 ? <SearchSuggestions results={results} /> : null}</div>
      </section>
    </main>
  );
}

export default Home;
