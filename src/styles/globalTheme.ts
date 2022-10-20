import { extendTheme } from '@chakra-ui/react';

const globalTheme = extendTheme({
  colors: {
    text: { default: 'BlackAlpha.900', light: 'White' },
    bg: { default: 'White', green: 'green.200' },
  },
  fonts: {
    body: 'Inter, sans-serif',
  },
  styles: {
    global: {
      body: {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        bg: 'bg',
        color: 'text',
        fontSize: { base: '2rem' },
      },
    },
  },
});

export default globalTheme;
