// import { useState } from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Flex, Link } from '@chakra-ui/react';

import { MovieType } from '../types/types';

import { getAllMovies } from '../services/controllers';

function MoviesList() {
  const [moviesList, setMovieList] = useState<MovieType[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllMovies()
      .then((res) => {
        setMovieList(res);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Flex
      flexDirection="column"
      border="1px solid Black"
      borderRadius="5"
      overflow="scroll"
    >
      {!isLoading &&
        moviesList.map((movie: MovieType) => (
          <Link
            as={NavLink}
            to={movie.imdbID}
            key={movie.imdbID}
            textDecoration="none"
            color="blue.600"
            padding="1rem 2rem"
            _hover={{ bg: 'blue.200', color: 'White' }}
            _activeLink={{ bg: 'blue.800', color: 'White' }}
            transition="700ms ease"
          >
            {movie.Title}
          </Link>
        ))}
    </Flex>
  );
}

export default MoviesList;
