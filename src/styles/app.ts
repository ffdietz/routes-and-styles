import { chakra, Box, Flex } from '@chakra-ui/react';

export const AppContainer = chakra(Box, {
  baseStyle: {
    w: 'calc(100vw)',
    overflow: 'hidden',
  },
});

export const AppRoutesContainer = chakra(Flex, {
  baseStyle: {
    w: 'calc(80vw)',
    h: 'calc(80vh)',
    margin: ' auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
