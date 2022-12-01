import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from "react-router-dom";
import { persistor,store } from "./redux/store";
import { App } from 'components/App';
import './index.css';
import { ChakraProvider, theme, ColorModeProvider} from '@chakra-ui/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <ColorModeProvider>
            <BrowserRouter basename='/goit-react-hw-08-phonebook'>
              <App />
            </BrowserRouter>
          </ColorModeProvider>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
