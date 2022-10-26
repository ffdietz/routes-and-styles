import { chakra, Flex, Container } from '@chakra-ui/react';

export const AppContainer = chakra(Container, {
  baseStyle: {
    w: '100vw',
    overflow: 'hidden',
  },
});

export const AppRoutesContainer = chakra(Flex, {
  baseStyle: {
    w: '80vw',
    h: '80vh',
    margin: ' auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
