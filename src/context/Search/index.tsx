import React, { createContext, useState } from 'react';
import { SearchContextProps, SearchProviderProps } from './types';

export const SearchContext = createContext<SearchContextProps>({
  searchTerm: '',
  setSearchTerm: () => { },
});

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};