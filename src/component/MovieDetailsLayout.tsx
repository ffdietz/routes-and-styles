import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react';
import { MovieType} from '../types/types'

function MovieDetailsLayout({
   Title, 
   Year,
   Runtime,
   Genre,
   Director,
   Actors,
   Plot,

  }: MovieType) {

  return (
    <>
      <Box>
        <Heading as="h1" fontSize="3rem">{Title}</Heading>
        <Text>{Year}</Text>
      </Box>
      <Box>
        <Text>[{Runtime}]</Text>
        <Text>{Genre}</Text>
      </Box>
      <Box>
        <Text>Directed by: {Director}</Text>
        <Text>Actors: {Actors}</Text>
        <Text>{Plot}</Text>
      </Box>
    </>
  );
}

export default MovieDetailsLayout