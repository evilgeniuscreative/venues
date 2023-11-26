import React from 'react';
import { useParams } from 'react-router-dom';

function Listing({ results }) {
  console.log('useParams():', useParams(), 'results:', results);
  const { id } = useParams();
  console.log('id', id);

  console.log('id', id);
  const v = results.find((v) => v.id === id);
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
