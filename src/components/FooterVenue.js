import React from 'react';

function FooterVenue({ handleApiCall }) {
  const rndVenues = [];
  for (let i = 0; i < 5; i++) {
    let rndNum = Math.round(Math.random() * 140);
    //https://app.ticketmaster.com/discovery/v2/venues?apikey=ggYrggByKvnlB9zvhAU4d5sCxQLo8hk5&locale=*&countryCode=US&page=1
    let rndVenue = handleApiCall(process.env.REACT_APP_TM_BASE_URL + 'venues?apikey=' + process.env.REACT_APP_TM_API_KEY + '&locale=*&countryCode=US&page=' + rndNum);
    console.log('rndVenue', rndVenue);
    rndVenues.push(rndVenue);
  }

  return (
    <figure>
      <h4>meh</h4>
      <img src='beh' alt='geh' />
    </figure>
  );
}

export default FooterVenue;
