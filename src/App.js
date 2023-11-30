import React, { useState, useEffect, useContext } from 'react';
import { Route, Routes, Navigate, useParams } from 'react-router-dom';
import { DataContext } from './Contexts/DataContext.js';

import Home from './components/Home';
import Header from './components/Header';
import Detail from './components/Detail';

// import z from './data/zips-geopoint.js';
// import tmdata from './data/tmdata.js';
import './App.css';

function App() {
  // const [zipCodes, setZipCodes] = useState(z);
  const dataContext = useContext(DataContext);
  const [currPage, setCurrPage] = useState('home');
  const [dataset, setDataset] = useState({});
  const [pageTitle, setPageTitle] = useState('Find your venue');
  const [results, setResults] = useState([]); // TO AVOID RERENDERS
  const [searchKey, setSearchKey] = useState('keyword');
  const [searchString, setSearchString] = useState('');

  // console.log('tmdata_raw', tmdata);

  const venueID = useParams();

  const TM = {
    baseUrl: 'https://app.ticketmaster.com/discovery/v2/',
    apiKey: '&apikey=ggYrggByKvnlB9zvhAU4d5sCxQLo8hk5',
    vens: 'venues',
    keyword: '&keyword=',
    radius: '&radius=50&unit=miles',
    sort: '&sort=name,asc',
    defaultSize: '&size=200',
    defaultLocales: '&locale=*',
    q: '?',
  };

  const handleChange = (e) => {
    console.log('handleChange');
    e.preventDefault();

    setSearchString((currSearchTerm) => {
      const newSearchTerm = e.target.value;
      console.log('newSearchTerm', newSearchTerm);
      return newSearchTerm;
    });

    // handleApiCall(e);
  };

  const handleSearchKey = (e) => {
    console.log('handleSearchKey');
    e.preventDefault();
    setSearchKey(e.target.value);
    console.log('handleSearchKey', searchKey);
  };

  // Venue by id https://app.ticketmaster.com/discovery/v2/venues/:id.json?apikey=ggYrggByKvnlB9zvhAU4d5sCxQLo8hk5

  /*/--------------  API CALL   ----------------/*/

  const handleApiCall = () => {
    console.log('handleApiCall ', searchString);

    // setQuery(() => {
    //  const newQ = TM.baseUrl + TM.vens + TM.q + TM.apiKey + TM.keyword + searchString + TM.radius + TM.defaultLocales + TM.defaultSize + TM.sort;
    // return newQ;
    // })

    let Query = '';
    switch (searchKey) {
      case 'keyword':
        // perform search by keyword, city, venue name
        Query = TM.baseUrl + TM.vens + TM.q + TM.apiKey + TM.keyword + searchString + TM.radius + TM.defaultLocales + TM.defaultSize + TM.sort;
        break;

      // case 'zipCode':
      //   // perform search by zipCode only
      //   const geoPoints = [z[searchString].geoPoint.latitude, z[searchString].geoPoint.longitude];
      //   setQuery(TM.baseUrl + TM.vens + TM.q + TM.apiKey + TM.defaultLocales + '&geoPoint=' + geoPoints[0] + ',' + geoPoints[1] + TM.sort);
      //   break;

      case 'geopoint':
        // perform search by geographic coordinates lat,long
        Query = TM.baseUrl + TM.vens + TM.q + TM.apiKey + TM.defaultLocales + '&geoPoint=' + searchString + TM.sort;
        break;

      case 'id':
        // perform search by id venueID only for Listing page
        Query = TM.baseUrl + TM.vens + venueID.id + '.json' + TM.apiKey;
        break;

      default:
        // default case
        Query = TM.baseUrl + TM.vens + TM.q + TM.apiKey + TM.keyword + searchString + TM.radius + TM.defaultLocales + TM.defaultSize;
        break;
    }

    console.log('Query', Query);

    fetch(Query)
      .then((response) => response.json())
      .then((response) => {
        setDataset(response); // whole dataset with all parent elements
        setResults(response._embedded.venues);
      })
      .catch(console.error);
    console.log('fetch dataset', dataset);
    console.log('fetch results', results);
  };

  /*/--------------  END API CALL  ----------------/*/

  // fetch from API
  // useEffect(() => {
  //   // handleApiCall();
  // }, [searchString]);

  return (
    <DataContext.Provider value={{ results, currPage, setCurrPage, handleChange, handleApiCall }}>
      <div className='app'>
        <Header pageTitle={pageTitle} currPage={currPage} />
        <Routes>
          {' '}
          <Route path='/detail/:id' element={<Detail searchKey={searchKey} setSearchKey={setSearchKey} />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </DataContext.Provider>
  );
}

export default App;
