import React from 'react';
import Search from './Search';

function Home({ zips }) {
  return (
    <>
      <section>
        <Search zips={zips} />
      </section>
    </>
  );
}

export default Home;
