import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../Contexts/DataContext';

/*/--------------  WIKIMEDIA  ----------------/*/

async function fetchWMData(searchTerm) {
  try {
    let url =
      'https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=' +
      encodeURIComponent(searchTerm) +
      '&gsrnamespace=6&gsrlimit=1&prop=imageinfo&iiprop=url&iiurlwidth=1500&origin=*';
    let response = await fetch(url, {
      headers: {
        Authorization: process.env.REACT_APP_WM_TOKEN,
        'Api-User-Agent': 'Venues',
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Re-throw the error to handle it outside this function if needed
  }
}

/*/--------------  END  ----------------/*/

function Detail() {
  const dataContext = useContext(DataContext);
  const [thisVenue, setThisVenue] = useState(null);
  const [venueImg, setVenueImg] = useState('');
  const [imgDataset, setImgDataset] = useState('');
  const [imgResults, setImgResults] = useState('');

  const { id } = useParams();

  useEffect(() => {
    dataContext.setSearchKey('id');
    console.log('dataContext 1', dataContext);
    dataContext.handleApiCall(dataContext.searchKey, id);
  }, [id]);

  useEffect(() => {
    if (id) {
      async function getUsableImage() {
        try {
          // Fetch additional data based on venue ID
          let detailedSearchTerm = thisVenue.name;
          if (thisVenue.city && thisVenue.city.name) {
            detailedSearchTerm = thisVenue.name + thisVenue.city.name;
          }
          const vimg = await fetchWMData(detailedSearchTerm); // Use thisVenue.name or any other identifier that corresponds to the venue
          const whichPage = Object.keys(vimg.query.pages)[0];
          const WMimg = vimg.query.pages[whichPage].imageinfo[0].thumburl;
          setVenueImg(WMimg);
        } catch (error) {
          console.error('Error:', error);
        }
      }

      // Set venue and fetch image

      setThisVenue(dataContext.results.find((venue) => venue.id === id));
        getUsableImage();
   
    }
  }, [dataContext.results, id]);

  // setPageTitle(thisVenue.name);
  // if (!id) {
  //   return <h1>Venue detail not found</h1>;
  // }

  return (
    <>
      {thisVenue ? (
        <main id='detail'>
          <section className='dao'>
            <figure>{thisVenue.images && thisVenue.images.length > 0 ? <img src={venueImg} alt={thisVenue.name} /> : 'noimg'}</figure>

            <section className='info'>
              <p> {thisVenue.generalInfo && thisVenue.generalInfo.generalRule ? thisVenue.generalInfo.generalRule : null} </p>
              <p> {thisVenue.generalInfo && thisVenue.generalInfo.childRule ? thisVenue.generalInfo.childRule : null} </p>

              <p> {thisVenue.boxOfficeInfo && thisVenue.boxOfficeInfo.phoneNumberDetail ? thisVenue.boxOfficeInfo.phoneNumberDetail : null} </p>

              {/*               
              <p>{thisVenue.boxOfficeInfo.phoneNumberDetail}</p>
              <p>{thisVenue.boxOfficeInfo.openHoursDetail}</p>
              <p>{thisVenue.boxOfficeInfo.acceptedPaymentDetail}</p>
              <p>{thisVenue.boxOfficeInfo.willCallDetail}</p>

              <p>ADA: {thisVenue.accessibleSeatingDetail}</p>
              <p>ADA: {thisVenue.ada.adaPhones}</p>
              <p>ADA: {thisVenue.ada.adaCustomCopy}</p>
              <p>ADA: {thisVenue.ada.Hours}</p>
              <p> {thisVenue.parkingDetail}</p> */}
            </section>

            <div className='left'>
              Box Office: <br />
              <a href='tel:{thisVenue.boxOfficeInfo && thisVenue.boxOfficeInfo.phoneNumberDetail ? thisVenue.boxOfficeInfo.phoneNumberDetail : null}}'>
                {thisVenue.boxOfficeInfo && thisVenue.boxOfficeInfo.phoneNumberDetail ? thisVenue.boxOfficeInfo.phoneNumberDetail : null}
              </a>
              <br />@
              <a href={thisVenue.url ? thisVenue && thisVenue.url : thisVenue.url} target='_blank' rel='noreferrer'>
                TM Venue Page
              </a>
            </div>

            <div className='right'>
              Address
              <br />
              <a
                href={`https://www.google.com/maps/place/${thisVenue.address?.line1 ? thisVenue.address.line1.replace(' ', '+') : ''},+${thisVenue.city?.name || ''},+${
                  thisVenue.state?.stateCode || ''
                }+${thisVenue.postalCode || ''}`}
              >
                {thisVenue.address?.line1 || ''}
                <br />
                {thisVenue.city?.name || ''}, {thisVenue.state?.name || ''} {thisVenue.postalCode || ''}
              </a>
            </div>
          </section>
        </main>
      ) : (
        <h2>...loading </h2>
      )}
    </>
  );
}

export default Detail;
