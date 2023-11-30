import { createContext } from 'react';

export const DataContext = createContext({
  currPage: '',
  handleChange: () => {},
  results: [],
  setCurrentPage: () => {},
});
