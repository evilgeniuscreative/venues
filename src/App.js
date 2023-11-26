import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useParams } from 'react-router-dom';
import Home from './components/Home';
import Listing from './components/Listing';

// import z from './data/zips-geopoint.js';
import './App.css';

function App() {
  // const [zipCodes, setZipCodes] = useState(z);
  const [searchString, setSearchString] = useState('');
  const [dataset, setDataset] = useState({});
  const [results, setResults] = useState([]);
  const [lastLength, setLastLength] = useState(0);
  const [lastSearch, setLastSearch] = useState('');

  //const [searchKey, setSearchKey] = useState('');

  const getApiData = () => {
    // console.log('baseurl', process.env.REACT_APP_TM_BASE_URL);
    // console.log('apikey', process.env.REACT_APP_TM_API_KEY);
    // // console.log('apiString', apiString);

    const endpoint = process.env.REACT_APP_TM_BASE_URL + 'venues.json?' + process.env.REACT_APP_TM_API_KEY;
    console.log('endpoint', endpoint);

    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        console.log('fetch response:', response);
        setDataset(response);
        setResults(response._embedded.venues);
        console.log('fetch results', results);
      })
      .catch(console.error);
  };

  // load initial dataset
  useEffect(() => {
    getApiData();
  }, []);

  // const zipToGeoPoint = (e) => {
  //   e.preventDefault();
  //   setSearchString(e.target.value);

  //   const result = zipCodes.find((zipObj) => zipObj.zip === searchString);
  //   console.log('result', result);
  //   return result;
  // };

  // const handleTypeahead = (e) => {
  //   console.log('handleTypeahead');
  //   let searchString = e.target.value;
  //   let searchStringShortened = searchString.slice(0, searchString.length);

  //   // empty search field resets currencies to original state
  //   if (searchString.length === 0 || searchString.length === null) {
  //     // EMPTY SEARCH FIELD
  //     setResults(dataset);
  //     return;
  //   }

  //   // if search length is less than last length, reset currencies to original state then searches again for correct results
  //   if (searchString.length < lastLength) {
  //     console.log('ss down', searchString.length, lastLength);
  //     // BACKWARDS SEARCH (fewer characters)
  //     // setResults(dataset);
  //     searchString = document.querySelector('#search').value;
  //     searchStringShortened = searchString.slice(0, searchString.length);

  //     const venueSearch = dataset._embedded.venues.filter((venue) => venue.name.toLowerCase().match(searchStringShortened.toLowerCase()));
  //     setResults(venueSearch);

  //     // if typing is longer than last length, search for correct results
  //   } else {
  //     console.log('ss up', searchString.length, lastLength);

  //     // FORWARDS SEARCH (more characters)
  //     const venueSearch = dataset._embedded.venues.filter((venue) => venue.name.toLowerCase().match(searchStringShortened.toLowerCase()));

  //     setResults(venueSearch);
  //   }

  //   // set last length to current length
  //   setLastLength(searchString.length);
  //   return null;
  // };

  // const handleSearchKey = (e) => {
  //   console.log('handleSearchKey');
  //   e.preventDefault();
  //   setSearchKey(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   console.log('handleSubmit');
  //   e.preventDefault();
  //   // searchBy(e);
  // };

  const handleChange = (e) => {
    console.log('handleChange');

    e.preventDefault();
    setSearchString(e.target.value);
    console.log('ss value', e.target.value);
    console.log('results', results);

    // handleTypeahead(e);
  };

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home handleChange={handleChange} results={results} />} />
        <Route path='/listing/:id' element={<Listing results={results} />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
