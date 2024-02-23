import FooterVenues from './FooterVenues';

function Footer({ handleApiCall }) {
  return (
    <footer id='footer'>
      <FooterVenues handleApiCall={handleApiCall} />
    </footer>
  );
}

export default Footer;
