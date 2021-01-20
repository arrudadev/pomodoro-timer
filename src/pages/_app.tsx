import React from 'react';

import { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import theme from '../styles/theme';

import { SettingsProvider } from '../contexts/Settings';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <SettingsProvider>
        <Component {...pageProps} />
      </SettingsProvider>
    </ChakraProvider>
  );
};

export default App;
