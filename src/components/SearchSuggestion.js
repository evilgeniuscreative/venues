import React, { useContext } from 'react';
import { DataContext } from '../Contexts/DataContext';

function SearchSuggestion() {
  const dataContext = useContext(DataContext);

  console.log('Search Suggestion', dataContext);

  return (
    <>
      {dataContext ? (
        <div>
          {dataContext.results.map((r) => {
            return (
              <a key={r.id} href={'/detail/' + r.id}>
                {r.name}
              </a>
            );
          })}
        </div>
      ) : (
        <h2>...loading </h2>
      )}
    </>
  );
}

export default SearchSuggestion;
