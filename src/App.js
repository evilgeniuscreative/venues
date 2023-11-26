import React, { useState } from 'react';
import Search from './components/Search';
import SearchSuggestions from './components/SearchSuggestions';

// import z from './data/zips-geopoint.js';
import './App.css';

function App() {
  // const [zipCodes, setZipCodes] = useState(z);
  const [searchString, setSearchString] = useState('');

  const [results, setResults] = useState([]);
  // eslint-disable-next-line
  const [searchKey, setSearchKey] = useState('');

  const [lastLength, setLastLength] = useState(0);

  const getApiData = (apiString) => {
    console.log('baseurl', process.env.REACT_APP_TM_BASE_URL);
    console.log('apikey', process.env.REACT_APP_TM_API_KEY);
    // console.log('apiString', apiString);

    const endpoint = process.env.REACT_APP_TM_BASE_URL + 'venues.json?' + process.env.REACT_APP_TM_API_KEY;
    console.log('endpoint', endpoint);

    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        console.log('fetch response:', response._embedded.venues);
        setResults(response._embedded.venues);
      })
      .catch(console.error);
  };

  // const zipToGeoPoint = (e) => {
  //   e.preventDefault();
  //   setSearchString(e.target.value);

  //   const result = zipCodes.find((zipObj) => zipObj.zip === searchString);
  //   console.log('result', result);
  //   return result;
  // };

  const searchBy = (e) => {
    e.preventDefault();
    getApiData(searchString);
  };

  const handleSearchKey = (e) => {
    e.preventDefault();
    setSearchKey(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // searchBy(e);
    getApiData(searchString);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchString(e.target.value);
    console.log('value', e.target.value);

    searchBy(e);

    // let ssShortened = searchString.slice(0, searchString.length);

    // const currSearch = results.filter((currency) => currency.currency.toLowerCase().match(ssShortened.toLowerCase()));
    // setResults(currSearch);
  };

  return (
    <main>
      <h1>Welcome to the Venue Finder!</h1>
      <Search handleChange={handleChange} handleSubmit={handleSubmit} handleSearchKey={handleSearchKey} />
     <div id="searchResults">
            {results && results.length > 0 ? <SearchSuggestions results={results} /> : null}
     </div>
    </main>
  );
}

export default App;
