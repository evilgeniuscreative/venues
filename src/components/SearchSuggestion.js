import React from 'react';

function SearchSuggestion({ results, pageTitle }) {
  console.log('Search Suggestion', results);
  return (
    <>
      {results.map((r) => {
        return (
          <a key={r.id} href={'/detail/' + r.id}>
            {r.name}
          </a>
        );
      })}
    </>
  );
}

export default SearchSuggestion;
