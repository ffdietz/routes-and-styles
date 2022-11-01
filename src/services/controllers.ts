/* eslint-disable*/
import { Comment } from '../types/types';

const URL = 'http://localhost:8000/movies';

export const getAllMovies = async () => {
  try {
    const response = await fetch(`${URL}`);
    const json = await response.json();

    return json;
  } catch (error) {
    return console.log(error);
  }
};

export const getMovieById = async (id: string | undefined) => {
  try {
    const response = await fetch(`${URL}?imdbID=${id}`);
    const json = await response.json();

    return json;
  } catch (error) {
    return console.log(error);
  }
};

export async function getComments(id: string | undefined) {
  try {
    const response = await fetch(`${URL}?imdbID=${id}`);
    const json = await response.json();
    const comments: Comment[] = json[0]['Comments'];

    return comments;
  } catch (error: unknown) {
    return error;
  }
}

export async function postComment(id: string, data: Comment) {
  const currentComments = await getComments(id);
  let updateComments: Comment | Comment[] = [];

  // if (Array.isArray(currentComments))
    // updateComments = currentComments.push(data);
  // else updateComments = data;

  currentComments.push(data);

  try {
    const postOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Comments: currentComments
      }),
    };

    const response = await fetch(`${URL}/${id}`, postOptions);
    const json = await response.json();

    return json;
  } catch (error: unknown) {
    return error;
  }
}

// modify method to push array of comments in api
// it is just keeping the last one
