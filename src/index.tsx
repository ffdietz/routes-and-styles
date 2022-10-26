import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './styles/theme';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/abel/400.css';

import App from './component/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);

// Fix create-react-app NAME --template typescript
// npm i eslint@latest -D eslint-config-react-app
