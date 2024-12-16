import usePersistedState from "../../hooks/usePersistedState";

import { createContext, useCallback, useContext } from "react";
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from "styled-components";

import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";

import { MainProps, ThemeContextData } from "./types";

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }: MainProps) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const toggleTheme = useCallback(() => setTheme(theme.title === 'light' ? dark : light), [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};