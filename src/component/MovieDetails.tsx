import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Text } from '@chakra-ui/react';
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
    <Container>
      {movieToShow ? 
        <MovieDetailsLayout {...movieToShow} />
        :
        <Text color="gray" marginTop='2rem' >
          Please select a series or movie
        </Text>
      }
    </Container>
  );
}

export default MovieDetails;
