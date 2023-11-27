import React from 'react';
import { useParams } from 'react-router-dom';

function Detail({ results, pageTitle, setPageTitle }) {
  console.log('useParams():', useParams(), 'results:', results);
  const { id } = useParams();
  console.log('id', id);

  console.log('id', id);
  const v = results.find((v) => v.id === id);
  console.log('v', v);
  setPageTitle(v.name);
  // if (!id) {
  //   return <h1>Venue detail not found</h1>;
  // }

  return (
    <main id='detail'>
      <section className='dao'>
        <figure>
          <img src={v.images[0].url} alt={v.name} />
        </figure>

        <section className='info'>
          {v.generalInfo.generalRule.length > 0 ? <p> {v.generalInfo.generalRule} </p> : null}
          {v.generalInfo.childRule.length > 0 ? <p> {v.generalInfo.childRule}</p> : null}
          {v.boxOfficeInfo && v.boxOfficeInfo.length && v.boxOfficeInfo.phoneNumberDetail > 0 ? <p>{v.boxOfficeInfo.phoneNumberDetail}</p> : null}
          {v.boxOfficeInfo && v.boxOfficeInfo.length && v.boxOfficeInfo.openHoursDetail > 0 ? <p>{v.boxOfficeInfo.openHoursDetail}</p> : null}
          {v.boxOfficeInfo && v.boxOfficeInfo.length && v.boxOfficeInfo.acceptedPaymentDetail > 0 ? <p>{v.boxOfficeInfo.acceptedPaymentDetail}</p> : null}
          {v.boxOfficeInfo && v.boxOfficeInfo.length && v.boxOfficeInfo.willCallDetail > 0 ? <p>{v.boxOfficeInfo.willCallDetail}</p> : null}

          {v.accessibleSeatingDetail && v.accessibleSeatingDetail.length > 0 ? <p>ADA: {v.accessibleSeatingDetail}</p> : null}
          {v.ada && v.ada.length > 0 && v.ada.adaPhones > 0 ? <p>ADA: {v.ada.adaPhones}</p> : null}
          {v.ada && v.ada.length > 0 && v.ada.adaCustomCopy > 0 ? <p>ADA: {v.ada.adaCustomCopy}</p> : null}
          {v.ada && v.ada.length > 0 && v.ada.adaHours > 0 ? <p>ADA: {v.ada.Hours}</p> : null}
          {v.parkingDetail && v.parkingDetail.length > 0 ? <p> {v.parkingDetail}</p> : null}
        </section>

        <div className='left'>
          Box Office: <br />
          <a href='tel:{v.boxOfficeInfo.phoneNumberDetail}'>{v.boxOfficeInfo.phoneNumberDetail}</a>
          <br />@
          <a href={v.url} target='_blank' rel='noreferrer'>
            TM Venue Page
          </a>
        </div>

        <div className='right'>
          Address
          <br />
          <a href={'https://www.google.com/maps/place/' + v.address.line1.replace(' ', '+') + ',+' + v.city.name + ',+' + v.state.stateCode + '+' + v.postalCode}>
            {v.address.line1}
            <br />
            {v.city.name},{v.state.name} {v.postalCode}
          </a>
        </div>
      </section>
    </main>
  );
}

export default Detail;
