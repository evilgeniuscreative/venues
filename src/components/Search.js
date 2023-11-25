import React from 'react';
import SearchSuggestions from './SearchSuggestions';

function Search() {
  // axios.get(
  //   'https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=process.env.REACT_APP_TM_API_KEY&keyword=postalCode'
  // );

  // $.ajax({
  //   type: 'GET',
  //   url: 'https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=ggYrggByKvnlB9zvhAU4d5sCxQLo8hk5',
  //   async: true,
  //   dataType: 'json',
  //   success: function (json) {
  //     console.log(json);
  //     // Parse the response.
  //     // Do other things.
  //   },
  //   error: function (xhr, status, err) {
  //     // This time, we do not end up here!
  //   },
  // });

  return (
    <>
      <section id='searchSection'>
        <form id='searchForm'>
          <div className='form-first'>
            <label htmlFor='searchBy'>Search By:</label>
            <select name='searchBy' id='searchBy'>
              <option value='name'>Name</option>
              <option value='city'>City</option>
              <option value='state'>State</option>
              <option value='zip' selected='selected'>
                Zip Code
              </option>
            </select>
          </div>

          <div className='form-second'>
            <label htmlFor='search'>Search Text</label>
            <input type='text' name='search' id='search' placeholder='Search' />
            <button type='submit'>Search</button>
            <SearchSuggestions />
          </div>
        </form>
      </section>
    </>
  );
}

export default Search;
