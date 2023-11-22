import axios from "axios";

function Search() {


  axios.get('https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=process.env.REACT_APP_TM_API_KEY&keyword=postalCode')
  
  
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
      <section>
        <label htmlFor='searchBy'></label>
        <select name='SearchBy' id='searchBy'>
          <options value="name">Name</options>
          <options value="city">City</options>
          <options value="state">State</options>
          <options value="zip">Zip Code</options>
        </select>
        <label htmlFor='search'></label>
        <input type='text' id='search' />
      </section>
    </>
  );
}

export default Search;
