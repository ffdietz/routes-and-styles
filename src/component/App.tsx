import { Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import Header from './Header';
import Home from './Home';
import MoviesGuide from './MoviesGuide';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />

      <div className="viewer-container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/movies" element={<MoviesGuide />}>
            
          </Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;

