/* eslint-disable arrow-body-style */
import { Comment } from '../types/types';

const URL = 'http://localhost:8000/movies';

export const getAllMovies = async () => {
  const response = await fetch(`${URL}`);
  
  return response.json()
};

export const getMovieById = async (id: string | undefined) => {
  const response = await fetch(`${URL}?imdbID=${id}`);

  return response.json()
}

export const postComment = async (id: string, data: Comment) => {
  try{
    const response = await fetch(`${URL}?imdbID=${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        Comments: data
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const responseBody = await response.json();
    console.log({responseBody})
    return responseBody;
  }
  catch( error){
    return error
  }

};