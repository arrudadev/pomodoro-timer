import { extendTheme } from '@chakra-ui/react';

import global from './global';

const theme = extendTheme({
  styles: { global },
  colors: {
    blue: { 500: '#0098f7', 600: '#007bc7', 800: '#111d25' },
    gray: { 500: '#e3e4e5', 600: '#a7abae' },
  },
});

export default theme;
