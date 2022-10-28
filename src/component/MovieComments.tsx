import { Container, Heading } from '@chakra-ui/react';
import MovieCommentsForm from './MovieCommentsForm';

function MovieComments() {

  return (
    <Container marginTop="3rem">
      <Heading as="h4">Coments...</Heading>
      <MovieCommentsForm/>
      {/* <MovieComments/> */}
    </Container>
  );
}

export default MovieComments