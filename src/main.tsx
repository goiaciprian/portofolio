import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { theme } from '@layout';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode='dark' />
      <App />
    </ChakraProvider>
  </StrictMode>
);
