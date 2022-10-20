import { Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import Header from './Header';
import Home from './Home';
import MovieDetails from './MovieDetails';
import MoviesGuide from './MoviesGuide';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="layout-container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/movies" element={<MoviesGuide />}>
            <Route path=':name' element={<MovieDetails/>}/>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

