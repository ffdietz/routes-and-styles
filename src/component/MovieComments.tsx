import { Button, Container, Heading, Input, Textarea } from '@chakra-ui/react';

function MovieComments() {

  return (
    <Container marginTop="3rem">
      <Heading as="h4">Coments...</Heading>
      <Input placeholder="Your name" />
      <Textarea placeholder="Your Coment"/>
      <Button>Submit</Button>
    </Container>
  );
}

export default MovieComments