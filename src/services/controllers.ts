/* eslint-disable arrow-body-style */
const URL = 'http://localhost:8000/movies';

export const getAllMovies = async () => {
  const response = await fetch(`${URL}`);
  
  return response.json()
};

export const getMovieById = async (id: string | undefined) => {
  const response = await fetch(`${URL}?imdbID=${id}`);

  return response.json()
}

export const postComment = async (id: string, data: string) => {
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(res => res.json())
    .then(res =>  console.log('Success:', res))
    .catch(error => console.error('Error:', error));

  return response
}