import { Container } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import Contact from './Contact';
import Home from './Home';
import MovieDetails from './MovieDetails';
import MoviesGuide from './MoviesGuide';
import Navbar from './Navbar';
import NavigateBar from './NavigateBar';

function App() {
  return (
    <Container w="100vw" h="100vh" overflow="hidden">
      <Navbar />
      <Container w="90vw" h="75vh" marginTop="5vh" centerContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movies" element={<MoviesGuide />}>
            <Route path=":id" element={<MovieDetails />} />
          </Route>
        </Routes>
      </Container>
      <NavigateBar />
    </Container>
  );
}

export default App;

