import React from 'react';
import FooterVenue from './FooterVenue';
function FooterVenues({ results, handleApiCall }) {
  const rndVenues = [];

  for (let i = 0; i < 5; i++) {
    let rndNum = Math.floor(Math.random() * 19);
    //https://app.ticketmaster.com/discovery/v2/venues?apikey=ggYrggByKvnlB9zvhAU4d5sCxQLo8hk5&locale=*&countryCode=US&page=1
    let rndVenue = results[rndNum] // handleApiCall(process.env.REACT_APP_TM_BASE_URL + 'venues?apikey=' + process.env.REACT_APP_TM_API_KEY + '&locale=*&countryCode=US&page=' + rndNum);
    console.log('Detail.js: rndVenue', rndVenue);
    rndVenues.push(rndVenue);
  }

  return (
    <div class='footer-venues'>
      <h2>Other Fun Venues</h2>
      <FooterVenue handleApiCall={handleApiCall} />
    </div>
  );
}

export default FooterVenues;
