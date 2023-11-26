import React from 'react';
import SearchSuggestion from './SearchSuggestion';

function SearchSuggestions({results}) {
  console.log('Search Suggestions');
  return (
    <div id='searchSuggestions'>
      <SearchSuggestion results={results} />
    </div>
  );
}

export default SearchSuggestions;
