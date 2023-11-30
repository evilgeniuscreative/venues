import { createContext } from 'react';

export const DataContext = createContext({
  currPage: '',
  handleChange: () => {},
  handleApiCall: () => {},
  results: [],
  setCurrentPage: () => {},
});
