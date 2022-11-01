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

export const getComments = async (id: string | undefined) => {
  try {
    const response = await fetch(`${URL}?imdbID=${id}`);
    const json = await response.json();
    const comments: Comment[] = json[0]['Comments'];

    return comments;
  } catch (error: unknown) {
    console.error(error);
  }
}

export const postComment = async (id: string, data: Comment) => {
  let currentComments = await getComments(id);
  currentComments?.push(data);

  try{
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Comments: currentComments
      }),
    };

    const response = await fetch(`${URL}/${id}`, requestOptions)
    const json = await response.json();
    
    return json
  } catch( error ) { console.log(error) }
};


// modify method to push array of comments in api
// it is just keeping the last one