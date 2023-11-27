import React from 'react';
import FooterVenue from './FooterVenue';
function FooterVenues({ handleApiCall }) {
  return (
    <div class='footer-venues'>
      <h2>Other Fun Venues</h2>
      <FooterVenue handleApiCall={handleApiCall} />
    </div>
  );
}

export default FooterVenues;
