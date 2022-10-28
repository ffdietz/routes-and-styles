/* eslint-disable arrow-body-style */
const URL = 'http://localhost:8000/movies';

export const getAllMovies = async () => {
  const response = await fetch(`${URL}`);
  
  return response.json();
};

export const getMovieById = (id: string | undefined) => {
   return fetch(`${URL}?imdbID=${id}`);
}

export const postComment = (id: string, data: string) => {
  return fetch(URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}