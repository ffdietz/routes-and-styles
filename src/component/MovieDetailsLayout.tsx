import React from 'react'
import { Box, Container, Heading, Text, Image, HStack } from '@chakra-ui/react';
import { MovieType} from '../types/types'

function MovieDetailsLayout({
   Title, 
   Year,
   Runtime,
   Genre,
   Director,
   Actors,
   Plot,
   Images
  }: MovieType) {

    console.log(Images)

  return (
    <Container
      w="full"
      h="full"
      border="1px solid Black"
      borderRadius="5px"
      padding="1rem"
      overflow='scroll'
      paddingBottom='5rem'
    >
      <Heading as="h3">About...</Heading>
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
        <HStack overflowY='scroll'>
          {
            Images ?
              Images.map((image) => 
                <Image src={image} alt=""/>
              )
              :
              <Text>No images to show...</Text>
          }
        </HStack>
      </Box>
    </Container>
  );
}

export default MovieDetailsLayout