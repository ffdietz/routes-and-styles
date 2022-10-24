import { Flex } from '@chakra-ui/react';
import MoviesList from './MovieList';
import MovieDetails from './MovieDetails';

function MoviesGuide() {
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="stretch"
    >
      <MoviesList />
      <MovieDetails />
    </Flex>
  );
}

export default MoviesGuide;
