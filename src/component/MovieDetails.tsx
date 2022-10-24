import { Box, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const [movieToShow, setMovieToShow] = useState<string | undefined>('');
  const [isLoading, setLoading] = useState<boolean>(true);

  const params = useParams();
  const { name } = params;

  useEffect(() => {
    setMovieToShow(name);
    setLoading(false);
  }, [name]);

  return (
    <Box
      w="calc(60vw)"
      h="calc(65vh)"
      border="1px solid Black"
      borderRadius="10px"
      padding="1rem"
    >
      <Heading as="h1">Movie Details</Heading>
      {!isLoading && <h1>{movieToShow}</h1>}
    </Box>
  );
}

export default MovieDetails;
