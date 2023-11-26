import React, { useState } from 'react';


function Search({ handleChange, handleSubmit, handleSearchKey, results }) {
  // eslint-disable-next-line
  const [pholder, setpHolder] = useState('Search Venues');

  const handleFocus = (e) => {
    setpHolder('');
  };

  const handleBlur = (e) => {
    setpHolder('Search Venues');
  };

  console.log('Search.js', results);
  return (
    <section id='searchSection'>
      <form id='searchForm'>
        <div className='form-first'>
          <label htmlFor='searchBy'>Search By:</label>
          <select name='searchBy' id='searchBy' defaultValue='city' onChange={handleSearchKey}>
            <option value='name'>Name</option>
            <option value='city'>City</option>
            <option value='state'>State</option>
            <option value='zip'>Zip Code</option>
          </select>
        </div>

        <div className='form-second'>
          <label htmlFor='search'>Search Text</label>
          <input type='text' name='search' id='search' placeholder='Search' onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} onSubmit={handleSubmit} />
        </div>
      </form>
    </section>
  );
}

export default Search;
