import React from 'react';
import { useLocation, useParams } from 'react-router-dom';


function Listing({ results }) {
const {vid} = useParams();

  console.log('vid', vid);
  const v = results.find((v) => v.id === vid);
  console.log('v', v);
  // if (!id) {
  //   return <h1>Venue listing not found</h1>;
  // }
  return (
    <>
      <section>Listing Page</section>
      {/* <p>{v.id}</p>
      <p>{v.name}</p>
      <p>{v.city.name}</p>
      <p>{v.city.name}</p>
      <p>{v.city.name}</p>
      <p>{v.state.name}</p>
      <p>{v.postalCode}</p>
      <p>
        <a href='{v.url}'>{v.name} url</a>
      </p> */}
    </>
  );
}

export default Listing;
