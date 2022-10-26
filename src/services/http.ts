/* eslint-disable arrow-body-style */
const URL = 'http://localhost:8000/movies';

export const getAllMovies = () => {
   return fetch(`${URL}`);
};

export const getMovieById = (id: string | undefined) => {
   return fetch(`${URL}?imdbID=${id}`);
}