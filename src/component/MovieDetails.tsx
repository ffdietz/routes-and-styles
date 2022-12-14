/* eslint-disable*/
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Heading, Text } from '@chakra-ui/react';
import { getMovieById } from '../services/controllers';
import { MovieType } from '../types/types';
import MovieDetailsLayout from './MovieDetailsLayout';
import MovieComments from './MovieComments';

function MovieDetails() {
  const params = useParams();
  const {id} = params;
  const [movieToShow, setMovieToShow] = useState<MovieType | null>(null);

  useEffect(() => {
    getMovieById(id)
      .then((res) => {
        setMovieToShow(res[0]);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <Container
      w="full"
      h="full"
      border="1px solid Black"
      borderRadius="5px"
      padding="1rem"
      overflow="scroll"
      paddingBottom="5rem"
    >
      <Heading as="h3">About...</Heading>
      {!movieToShow ? (
        <Text color="gray" marginTop="2rem">
          Choose a series or film from the list...
        </Text>
      ) : (
        <>
          <MovieDetailsLayout movie={movieToShow} />
          <MovieComments />
        </>
      )}
    </Container>
  );
}

export default MovieDetails;
