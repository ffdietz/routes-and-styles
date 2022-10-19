import { Link } from "react-router-dom";
import { MovieLinkType } from "../types/types";

const MoviesList = () => {
  const movies = [
    {
      title: "movie_A",
    },
    {
      title: "movie_B",
    },
    {
      title: "movie_C",
    },
    {
      title: "movie_D",
    },
    {
      title: "movie_E",
    }
  ];

 return (
   <div className="list-container">
     {
      movies.map((item: MovieLinkType) => (
        <Link
          to={item.title.toLocaleLowerCase()}
          className="list-link-text"
        >
          {item.title}
        </Link>
      ))
     }
   </div>
 );
}

export default MoviesList