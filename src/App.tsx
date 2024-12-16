import { SupabaseContextProvider, ThemeContextProvider, SearchProvider } from './context';

import GlobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => {
  return (

    <SupabaseContextProvider>
      <ThemeContextProvider>
        <SearchProvider>
          <GlobalStyle />
          <Routes />
        </SearchProvider>
      </ThemeContextProvider>
    </SupabaseContextProvider>

  );
};

export default App;