import MovieLink from "./MovieLink"

const MoviesList = () => {
 return (
   <div className="list-container">
     <MovieLink name="movie_A" />
     <MovieLink name="movie_B" />
     <MovieLink name="movie_C" />
     <MovieLink name="movie_D" />
     <MovieLink name="movie_E" />
   </div>
 );
}

export default MoviesList