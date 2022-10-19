import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import MovieDetails from './MovieDetails';
import MoviesList from './MovieList';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="viewer-container">
        <MoviesList />
        <Routes>
          <Route path="/movies/:name" element={<MovieDetails />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

