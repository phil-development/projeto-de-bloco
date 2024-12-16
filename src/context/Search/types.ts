export interface SearchContextProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export interface SearchProviderProps {
  children: React.ReactNode;
}