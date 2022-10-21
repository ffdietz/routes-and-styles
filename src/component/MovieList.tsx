import { Link } from 'react-router-dom';
import { MovieLink, MovieListContainer } from '../styles/moviesGuideLayout';
import { MovieType } from '../types/types';

import movies from '../content/movieData';

function MoviesList() {
  const moviesList: MovieType[] = movies;

  return (
    <MovieListContainer>
      {moviesList.map((item: MovieType) => (
        <MovieLink as={Link} to={item.title.toLocaleLowerCase()}>
          {item.title}
        </MovieLink>
      ))}
    </MovieListContainer>
  );
}

export default MoviesList;
