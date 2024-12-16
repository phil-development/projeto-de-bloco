import { SupabaseContextProvider, ThemeContextProvider } from './context';

import GlobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <SupabaseContextProvider>
      <ThemeContextProvider>
        <GlobalStyle />
        <Routes />
      </ThemeContextProvider>
    </SupabaseContextProvider>
  );
};

export default App;