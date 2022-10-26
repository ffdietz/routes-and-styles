import { Flex } from '@chakra-ui/react';
import MoviesList from './MovieList';
import MovieDetails from './MovieDetails';

function MoviesGuide() {
  
  return (
    <Flex
      w="full"
      h="full"
      flexDirection='row'
      justifyContent='space-between'
      alignItems='stretch'
    >
      <MoviesList />
      <MovieDetails />
    </Flex>
  );
}

export default MoviesGuide;
