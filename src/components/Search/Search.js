import React, { useContext } from 'react';
import { DataContext } from '../../Contexts/DataContext';

function Search() {
  const dataContext = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchKey = e.target.searchBy.value;
    const searchText = e.target.search.value;
    console.log('searchKey', searchKey);
    dataContext.handleApiCall(searchKey, searchText);
  };

  // eslint-disable-next-line

  // const handleFocus = (e) => {
  //   setpHolder('');
  // };

  // const handleBlur = (e) => {
  //   setpHolder('Search Venues');
  // };

  // console.log('Results in Search.js', dataContext.results);

  return (
    <section id='searchSection'>
      <form id='searchForm' onSubmit={handleSubmit}>
        <div className='form-first'>
          {/* Search Key */}
          <label htmlFor='searchBy'>Search By:</label>
          <select name='searchBy' id='searchBy' defaultValue={dataContext.searchKey} onChange={dataContext.handleSearchKey}>
            <option value='keyword'>Name</option>
            <option value='keyword'>City</option>
            <option value='state'>State</option>
            <option value='zip'>Zip Code</option>
          </select>
        </div>

        <div className='form-second'>
          {/* Search Input */}
          <label htmlFor='search'>Search Text</label>

          <input type='text' name='search' id='search' placeholder='Search' onChange={dataContext.handleChange} />
        </div>
        <div className='form-third'>
          <button id='searchButton'>Search</button>
        </div>
      </form>
    </section>
  );
}

export default Search;
