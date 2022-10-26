import React from 'react'
import { Heading } from '@chakra-ui/react';
import { MovieLayoutProps} from '../types/types'

function MovieDetailsLayout(details: MovieLayoutProps) {
  const { Title, Year } = details;
  console.log({details});

  return <Heading as="h2"> </Heading>;
}

export default MovieDetailsLayout