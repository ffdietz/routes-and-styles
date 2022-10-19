import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movieToShow, setMovieToShow ] = useState<string | undefined>('') 
  const [isLoading, setLoading] = useState<boolean>(true);  

  const params = useParams();
  const name = params.name;

  console.log(movieToShow);

  useEffect(() => {
    setMovieToShow(name);
    setLoading(false);
  }, [name]);

  return (
    <div className="details-container">
      {!isLoading && <h1>{movieToShow}</h1>}
    </div>
  );
}

export default MovieDetails