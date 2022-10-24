import { Link } from 'react-router-dom';
import { VStack } from '@chakra-ui/react';

import { MovieLink } from '../styles/movies';
import { MovieType } from '../types/types';

import { movies } from '../content/content';

function MoviesList() {
  const moviesList: MovieType[] = movies;

  return (
    <VStack
      padding='1rem'
      border='1px solid black'
      borderRadius='10px'
      marginRight={2}
      >
      {moviesList.map((movie: MovieType) => (
        <MovieLink
          as={Link}
          to={movie.title.toLocaleLowerCase()}
          key={movie.title}
        >
          {movie.title}
        </MovieLink>
      ))}
    </VStack>
  );
}

export default MoviesList;
