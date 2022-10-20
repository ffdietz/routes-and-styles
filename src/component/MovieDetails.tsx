import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const [movieToShow, setMovieToShow] = useState<string | undefined>('');
  const [isLoading, setLoading] = useState<boolean>(true);

  const params = useParams();
  const { name } = params;

  useEffect(() => {
    setMovieToShow(name);
    setLoading(false);
  }, [name]);

  return (
    <div className="details-container">
      <h1>Movie Details</h1>
      {!isLoading && <h1>{movieToShow}</h1>}
    </div>
  );
}

export default MovieDetails;
