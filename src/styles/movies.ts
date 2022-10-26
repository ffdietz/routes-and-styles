import { Box, chakra, Flex, Link } from '@chakra-ui/react';

export const MoviesContainer = chakra(Flex, {
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
    padding: '2rem',
    border: '1px solid black',
    borderRadius: '10px',
  },
});

export const MovieLink = chakra(Link, {
  baseStyle: {
    textDecoration: 'none',
    color: 'blue.600',
    margin: '10px 20px',
  },
});
