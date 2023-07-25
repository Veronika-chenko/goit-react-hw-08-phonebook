import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './redux/store';
import { App } from 'components/App';
import './index.css';
import { ChakraProvider, theme, ColorModeProvider } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ChakraProvider theme={theme}>
            <ColorModeProvider>
              <BrowserRouter basename="/phonebook-react-app">
                <App />
              </BrowserRouter>
            </ColorModeProvider>
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
