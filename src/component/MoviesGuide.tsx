import React from 'react'
import MoviesList from './MovieList';
import MovieDetails from "./MovieDetails";

const MoviesGuide = () => {
  return (
    <div>
      <MoviesList />
      <MovieDetails />
    </div>
  );
}

export default MoviesGuide