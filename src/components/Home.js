import React, {useContext, useEffect, useState} from 'react';
// import FooterData from '../Util/FooterData';
//import FetchWMData from '../Util/FetchWMData';
import OrganizeFooterData from '../Util/OrganizeListFromOutput';
import Search from './Search/Search';
import { DataContext } from '../Contexts/DataContext';
import SearchSuggestions from './Search/SearchSuggestions';
import { Footer as FullFooter } from './Footer/FullFooter';
import footerData from "../Util/FooterData";
import OrganizeListFromOutput from "../Util/OrganizeListFromOutput";
import footer from "./Footer/Footer";

function Home() {
  const { results, setCurrPage } = useContext(DataContext);
  const [footerDataset, setFooterDataset] = useState({});
  const [footerResults, setFooterResults] = useState([]); // TO AVOID RERENDERS
  const footerDataQuery = process.env.REACT_APP_TM_BASE_URL + 'venues?apikey=' + process.env.REACT_APP_TM_API_KEY + '&locale=*&countryCode=US&size=5';

  useEffect(() => {
    setCurrPage('home');
  }, [setCurrPage]);

  console.log('results (Home.js)',{ results });


  useEffect(() => {
    fetch(footerDataQuery)
        .then((response) => response.json())
        .then((response) => {
          setFooterDataset(response); // whole dataset with all parent elements
           setFooterResults(response._embedded.venues);
            console.log('response (Home.js)', response._embedded.venues);
        })
        .catch(console.error);
  });

  const op = OrganizeListFromOutput(footerResults);
  console.log('op (Home.js)', op);

  return (
    <main className='home'>
      <section>
        <article className='maintext'>If you love live performance and traveling, let us find venues for you ... wherever is on your bucket list.</article>
        <Search />
        <div id='searchResults'>{results && results.length > 0 ? <SearchSuggestions results={results} /> : null}</div>
        <FullFooter data={op} includeImage styleClass="footer-section" />
      </section>
    </main>
  );
}

export default Home;
