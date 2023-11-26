import React from 'react';

function SearchSuggestion({ results }) {
  console.log('Search Suggestion', results);
  return (
    <>
      {results.map((r) => {
        return (
          <a key={r.id} href={'/listing/' + r.id}>
            {r.name}
          </a>
        );
      })}
    </>
  );
}

export default SearchSuggestion;
