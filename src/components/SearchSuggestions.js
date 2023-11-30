import React, { useContext } from 'react';
import { DataContext } from '../Contexts/DataContext';
import SearchSuggestion from './SearchSuggestion';

function SearchSuggestions() {
  const results = useContext(DataContext);

  console.log('Search Suggestions');
  return (
    <div id='searchSuggestions'>
      <SearchSuggestion  />
    </div>
  );
}

export default SearchSuggestions;
