import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  breakpoints: {
    sm: '30rem',
    md: '48rem',
    lg: '62rem',
    xl: '80rem',
    '2xl': '96rem',
  },

  fonts: {
    heading: 'Abel, sans-serif',
    body: 'Space Grotesk, sans-serif',
  },

  colors: {
    brand: {
      primary: '#000',
      secondary: '#FFF',
      green: '#38B2AC',
    },
  },

  styles: {
    global: {
      'html, body': {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        margin: '0',
        bg: 'white',
        color: 'text',
        fontSize: { base: '1.2rem' },
      },
    },
  },
});

export default theme;
