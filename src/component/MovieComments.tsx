import { Container, Heading } from '@chakra-ui/react';
import MovieCommentsForm from './MovieCommentsForm';
import MovieCommentsWall from './MovieCommentsWall';

function MovieComments(){

  return (
    <Container 
     marginTop="3rem"
     padding="0"
     >
      <Heading as="h4">Coments...</Heading>
      <MovieCommentsWall/>
      <MovieCommentsForm/>
    </Container>
  );
}

export default MovieComments