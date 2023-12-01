import { createContext } from 'react';

export const DataContext = createContext({
  currPage: '',
  handleChange: () => {},
  handleApiCall: (searchKey, SearchText) => {},
  results: [],
  setCurrentPage: () => {},
  handleSearchKey: () => {}
});
