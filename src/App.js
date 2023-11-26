import React, { useState } from 'react';
import { Route, Routes, Navigate, useParams } from 'react-router-dom';
import Home from './components/Home';
import Listing from './components/Listing';

import z from './data/zips-geopoint.js';
import './App.css';

function App() {
  // const [zipCodes, setZipCodes] = useState(z);
  const TM = {
    baseUrl: 'https://app.ticketmaster.com/discovery/v2/',
    apiKey: 'ggYrggByKvnlB9zvhAU4d5sCxQLo8hk5',
    vens: 'venues',
    keyword: '&keyword=',
    radius: '&radius=50&unit=miles',
    sort: '&sort=name,asc',
    defaultSize: '&size=200',
    defaultLocales: '&locale=*',
    q: '?',
  };
  console.log('TM', TM);
  const [searchString, setSearchString] = useState('Kent');
  const [query, setQuery] = useState('');
  const [dataset, setDataset] = useState({});
  const [results, setResults] = useState([]);
  const [searchKey, setSearchKey] = useState('keyword');
  const venueID = useParams();

  const handleChange = (e) => {
    console.log('handleChange');
    e.preventDefault();
    console.log('searchKey', searchKey);
    handleApiCall(searchKey);
  };

  const handleSearchKey = (e) => {
    console.log('handleSearchKey');
    e.preventDefault();
    console.log('searchKey', searchKey);
    setSearchKey(e.target.value);
  };

  // Venue by id https://app.ticketmaster.com/discovery/v2/venues/:id.json?apikey=ggYrggByKvnlB9zvhAU4d5sCxQLo8hk5

  const handleApiCall = (e) => {
    console.log('handleApiCall');
    switch (searchKey) {
      case 'keyword':
        // perform search by keyword, city, venue name
        setQuery(TM.baseUrl + TM.vens + TM.q + TM.apiKey + TM.keyword + searchString + TM.radius + TM.defaultLocales + TM.defaultSize + TM.sort);
        break;

      case 'zipCode':
        // perform search by zipCode only
        const geoPoints = [z[searchString].geoPoint.latitude, z[searchString].geoPoint.longitude];
        setQuery(TM.baseUrl + TM.vens + TM.q + TM.apiKey + TM.defaultLocales + '&geoPoint=' + geoPoints[0] + ',' + geoPoints[1] + TM.sort);

        break;
      case 'geopoint':
        // perform search by geographic coordinates lat,long
        setQuery(TM.baseUrl + TM.vens + TM.q + TM.apiKey + TM.defaultLocales + '&geoPoint=' + searchString + TM.sort);
        break;

      case 'id':
        // perform search by id venueID only for Listing page
        setQuery(TM.baseUrl + TM.vens + venueID.id + '.json' + TM.apiKey);
        break;

      default:
        // default case
        setQuery(TM.baseUrl + TM.vens + TM.q + TM.apiKey + TM.keyword + searchString + TM.radius + TM.defaultLocales + TM.defaultSize);
        break;
    }
    console.log('searchKey', searchKey);
    console.log('query', query);

    // fetch(query)
    //   .then((response) => response.json())
    //   .then((response) => {
    //     setDataset(response); // whole dataset with all parent elements
    //     setResults(response._embedded.venues); // should be just venues
    //     console.log('fetch dataset', dataset);
    //     console.log('fetch results', results);
    //   })
    //   .catch(console.error);
  };

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home handleChange={handleChange} searchKey={searchKey} handleSearchKey={handleSearchKey} results={results} />} />
        <Route path='/listing/:id' element={<Listing results={results} />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
