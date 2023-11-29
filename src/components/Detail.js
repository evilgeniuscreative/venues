import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../Contexts/DataContext';
import { version } from 'react-dom';

function Detail() {
  const results = useContext(DataContext);
  // eslint-disable-next-line
  const [thisVenue, setThisVenue] = useState(null);

  console.log('useParams():', useParams(), 'results:', results);
  const { id } = useParams();
  console.log('results details', results);

  console.log('id', id);

  useEffect(() => {
    const v = results.find((v) => v.id === id);
    console.log('v', v);
    setThisVenue(v);
    console.log('v', v);
  }, []);

  // setPageTitle(thisVenue.name);
  // if (!id) {
  //   return <h1>Venue detail not found</h1>;
  // }

  return (
    <>
      {thisVenue ? (
        <main id='detail'>
          <section className='dao'>
            <figure>
              <img src={thisVenue.images[0].url} alt={thisVenue.name} />
            </figure>

            <section className='info'>
              <p> {thisVenue.generalInfo.generalRule} </p>
              <p> {thisVenue.generalInfo.childRule}</p>
              <p>{thisVenue.boxOfficeInfo.phoneNumberDetail}</p>
              <p>{thisVenue.boxOfficeInfo.openHoursDetail}</p>
              <p>{thisVenue.boxOfficeInfo.acceptedPaymentDetail}</p>
              <p>{thisVenue.boxOfficeInfo.willCallDetail}</p>

              <p>ADA: {thisVenue.accessibleSeatingDetail}</p>
              <p>ADA: {thisVenue.ada.adaPhones}</p>
              <p>ADA: {thisVenue.ada.adaCustomCopy}</p>
              <p>ADA: {thisVenue.ada.Hours}</p>
              <p> {thisVenue.parkingDetail}</p>
            </section>

            <div className='left'>
              Box Office: <br />
              <a href='tel:{thisVenue.boxOfficeInfo.phoneNumberDetail}'>{thisVenue.boxOfficeInfo.phoneNumberDetail}</a>
              <br />@
              <a href={thisVenue.url} target='_blank' rel='noreferrer'>
                TM Venue Page
              </a>
            </div>

            <div className='right'>
              Address
              <br />
              <a href={'https://www.google.com/maps/place/' + thisVenue.address.line1.replace(' ', '+') + ',+' + thisVenue.city.name + ',+' + thisVenue.state.stateCode + '+' + thisVenue.postalCode}>
                {thisVenue.address.line1}
                <br />
                {thisVenue.city.name},{thisVenue.state.name} {thisVenue.postalCode}
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
