import { Route, Routes } from 'react-router-dom';
import { AppContainer, AppRoutesContainer } from '../styles/app';

import Contact from './Contact';
import Home from './Home';
import MovieDetails from './MovieDetails';
import MoviesGuide from './MoviesGuide';
import Navbar from './Navbar';
import NavigateBar from './NavigateBar';

function App() {
  return (
    <AppContainer>
      <Navbar />
      <AppRoutesContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movies" element={<MoviesGuide />}>
            <Route path=":name" element={<MovieDetails />} />
          </Route>
        </Routes>
      </AppRoutesContainer>
      <NavigateBar />
    </AppContainer>
  );
}

export default App;

// literal sizes
// fetch json file
// some motions
