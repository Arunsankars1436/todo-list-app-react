import { useMemo, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import AppRoutes from '../routes/index';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { getLocalStorage } from '../utils';
import { Provider } from 'react-redux';
import { persistor, store } from '../store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  const themeNow = getLocalStorage('theme');
  const [darkMode, setDarkMode] = useState(themeNow === 'dark' ? true : false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          primary: {
            main: '#1976d2',
          },
          secondary: {
            main: '#fffff',
          },
          background: {
            default: darkMode ? '#121212' : '#ffffff',
          },
        },
      }),
    [darkMode],
  );

  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </StyledThemeProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
