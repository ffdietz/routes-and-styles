import React from 'react'
import { Box, Container, Heading, Text, Image, HStack } from '@chakra-ui/react';
import { MovieType} from '../types/types'

interface MovieDetailsLayoutProps {
  movie: MovieType
}

function MovieDetailsLayout({ movie }: MovieDetailsLayoutProps) {
  const { 
    Title, 
    Year, 
    Genre, 
    Runtime, 
    Director,
    Actors,
    Plot,
    Images
   } = movie;
  return (
    <Container>
      <Box margin="2rem 0">
        <Heading as="h1" fontSize="3rem">
          {Title}
        </Heading>
        <Text>{Year}</Text>
      </Box>
      <Box>
        <Text fontWeight="bold">{Genre}</Text>
        <Text>[{Runtime}]</Text>
      </Box>
      <Box marginTop="1rem">
        <Text fontWeight="bold">Directed by: </Text>
        <Text>{Director}</Text>
      </Box>
      <Box marginTop="1rem">
        <Text fontWeight="bold">Actors: </Text>
        <Text>{Actors}</Text>
      </Box>
      <Box marginTop="1rem">
        <Text fontWeight="bold">Plot: </Text>
        <Text>{Plot}</Text>
      </Box>
      <Box marginTop="2rem">
        <Heading as="h5">Screenshots</Heading>
        <HStack overflowY="scroll">
          {Images ? (
            Images.map((image:string) => <Image src={image} alt="" key={image} />)
          ) : (
            <Text>No images to show...</Text>
          )}
        </HStack>
      </Box>
    </Container>
  );
}

export default MovieDetailsLayout