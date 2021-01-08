import React from 'react';

import { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
