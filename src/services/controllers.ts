/* eslint-disable*/
import { Comment } from '../types/types';

const URL = 'http://localhost:8000/movies';

export const getAllMovies = async () => {
  try{
    const response = await fetch(`${URL}`);
    const json = await response.json();
    
    return json;
  } catch( error ) { return console.log(error) }
}


export const getMovieById = async (id: string | undefined) => {
  try{
    const response = await fetch(`${URL}?imdbID=${id}`);
    const json = await response.json();
    
    return json;
  } catch( error ) { return console.log(error) }
}


export const postComment = async (id: string, data: Comment) => {
  try{
    const requestOptions = {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ 
        Comments: data 
      }),
    };

    const response = await fetch(`${URL}/${id}`, requestOptions)
    const json = await response.json();
    
    return json
  } catch( error ) { return console.log(error) }
};

export const getComments = async (id: string | undefined ) => {
  try {
    const response = await fetch(`${URL}?imdbID=${id}`);
    const json = await response.json();
    const comments = await JSON.parse(JSON.stringify(json[0]['Comments']));

    return comments
  } catch (error: unknown) {
    return error;
  }
}