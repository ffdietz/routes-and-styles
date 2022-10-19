import React from 'react'
import { Link } from 'react-router-dom';
import { MovieLinkProp } from '../types/types';

const MovieLink = ({name} : MovieLinkProp) => {
  return (
    <Link className="list-link-text" to={`movies/${name.toLocaleLowerCase()}`}>
      {name}
    </Link>
  );
};

export default MovieLink