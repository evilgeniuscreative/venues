import React, { useState, useContext } from 'react';
import { DataContext } from '../Contexts/DataContext';

function Search() {
  const dataContext = useContext(DataContext);

  // eslint-disable-next-line
  const [pholder, setpHolder] = useState('Search Venues');

  // const handleFocus = (e) => {
  //   setpHolder('');
  // };

  // const handleBlur = (e) => {
  //   setpHolder('Search Venues');
  // };

  console.log('Results in Search.js', dataContext.results);

  return (
    <section id='searchSection'>
      <form id='searchForm'>
        <div className='form-first'>
          {/* Search Key */}
          <label htmlFor='searchBy'>Search By:</label>
          <select name='searchBy' id='searchBy' defaultValue={dataContext.searchKey}>
            <option value='name'>Name</option>
            <option value='city'>City</option>
            <option value='state'>State</option>
            <option value='zip'>Zip Code</option>
          </select>
        </div>

        <div className='form-second'>
          {/* Search Input */}
          <label htmlFor='search'>Search Text</label>

          <input type='text' name='search' id='search' placeholder='Search' onChange={dataContext.handleChange} />
        </div>
      </form>
    </section>
  );
}

export default Search;
