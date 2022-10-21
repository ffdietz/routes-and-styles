import { Box, chakra } from '@chakra-ui/react';

export const MoviesContainer = chakra(Box, {
  baseStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
});

export const MovieListContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    border: '1px solid black',
    borderRadius: '10px',
  },
});
