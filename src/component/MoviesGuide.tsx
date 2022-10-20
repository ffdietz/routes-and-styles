import MoviesList from './MovieList';
import MovieDetails from './MovieDetails';

function MoviesGuide() {
  return (
    <div className="viewer-container">
      <MoviesList />
      <MovieDetails />
    </div>
  );
}

export default MoviesGuide;
