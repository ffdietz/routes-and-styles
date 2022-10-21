import { Link } from 'react-router-dom';
import { MovieLink, MovieListContainer } from '../styles/moviesGuideLayout';
import { MovieType } from '../types/types';

import { movies } from '../content/content';

function MoviesList() {
  const moviesList: MovieType[] = movies;

  return (
    <MovieListContainer>
      {moviesList.map((movie: MovieType) => (
        <MovieLink as={Link} to={movie.title.toLocaleLowerCase()}>
          {movie.title}
        </MovieLink>
      ))}
    </MovieListContainer>
  );
}

export default MoviesList;
