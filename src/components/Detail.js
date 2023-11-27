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
          <p>{v.parkingDetail}</p>
          <p>{v.generalInfo.generalRule}</p>
        </section>

        <div className='left'>
          Box Office: <a href='tel:{v.boxOfficeInfo.phoneNumberDetail}'>{v.boxOfficeInfo.phoneNumberDetail}</a>
          <br />@
          <a href={v.url} target='_blank' rel='noreferrer'>
            TM Venue Page
          </a>
        </div>
        <div className='middle'></div>
        <div className='right'>
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
