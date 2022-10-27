import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Heading } from '@chakra-ui/react';
import { getMovieById } from '../services/http';
import { MovieType } from '../types/types';
import MovieDetailsLayout from './MovieDetailsLayout';

function MovieDetails() {
  const [movieToShow, setMovieToShow] = useState<MovieType | null>(null);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    getMovieById(id)
      .then(res =>res.json())
      .then(res => {
        setMovieToShow(res[0]);
      }).catch( error => console.error(error))
  }, [params]);

  return (
    <Container
      w="full"
      h="full"
      border="1px solid Black"
      borderRadius="10px"
      padding="1rem"
      margin="auto"
    >
      <Heading as="h3">About...</Heading>
      {movieToShow && <MovieDetailsLayout {...movieToShow} />}
    </Container>
  );
}

export default MovieDetails;
