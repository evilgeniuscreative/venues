import React, { useContext, useEffect, useState } from 'react';
// import UseFooterData from '../Util/UseFooterData';
//import FetchWMData from '../Util/FetchWMData';
import OrganizeFooterData from '../Util/organizeListFromOutput';
import Search from './Search/Search';
import { DataContext } from '../Contexts/DataContext';
import SearchSuggestions from './Search/SearchSuggestions';
import { Footer as FullFooter } from './Footer/FullFooter';


function Home() {
  const { results, setCurrPage } = useContext(DataContext);
  const [footerDataset, setFooterDataset] = useState({});
  const [footerResults, setFooterResults] = useState([]); // TO AVOID RERENDERS
  const footerDataQuery = process.env.REACT_APP_TM_BASE_URL + 'venues?apikey=' + process.env.REACT_APP_TM_API_KEY + '&locale=*&countryCode=US&size=5';

  useEffect(() => {
    setCurrPage('home');
  }, [setCurrPage]);

  useEffect(() => {
    fetch(footerDataQuery)
      .then((response) => response.json())
      .then(async (response) => {
        setFooterDataset(response); // whole dataset with all parent elements
        setFooterResults(await OrganizeFooterData(response._embedded.venues));
      })
      .catch(console.error);
  }, []);

  return (
    <main className='home'>
      <section>
        <article className='maintext'>If you love live performance and traveling, let us find venues for you ... wherever is on your bucket list.</article>
        <Search />
        <div id='searchResults'>{results && results.length > 0 ? <SearchSuggestions results={results} /> : null}</div>
        <FullFooter data={footerResults} includeImage styleClass='footer-section' />
      </section>
    </main>
  );
}

export default Home;
