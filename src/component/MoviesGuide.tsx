import React from 'react'
import MoviesList from './MovieList';
import MovieDetails from "./MovieDetails";

const MoviesGuide = () => {
  return (
    <div className="viewer-container">
      <MoviesList />
      <MovieDetails />
    </div>
  );
}

export default MoviesGuide