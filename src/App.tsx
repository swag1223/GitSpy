import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import { CssBaseline, ThemeProvider } from '@mui/material';

import router from '@routes/router.config';

import { store } from './store';
import theme from './theme';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={3}>
          <RouterProvider router={router} />
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
