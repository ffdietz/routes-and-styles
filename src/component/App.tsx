import { Route, Routes } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';

import Contact from './Contact';
import Header from './Header';
import Home from './Home';
import MovieDetails from './MovieDetails';
import MoviesGuide from './MoviesGuide';
import Navbar from './Navbar';

function App() {
  return (
    <Box w="calc(100vw)" overflow="hidden">
      <Navbar />
      <Header />
      <Flex w="calc(80vw)" h="calc(80vh)" margin="auto" justifyContent="center" alignItems="center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movies" element={<MoviesGuide />}>
            <Route path=":name" element={<MovieDetails />} />
          </Route>
        </Routes>
      </Flex>
    </Box>
  );
}

export default App;
