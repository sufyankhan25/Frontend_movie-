import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { isFavourite, RemoveFavourite, addtoFavourites } = useMovieContext();
  const favourite = isFavourite(movie.id);

  function favrtMovie(e) {
    e.preventDefault();
    if (favourite) RemoveFavourite(movie.id);
    else addtoFavourites(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={movie.poster_path 
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
            : "https://via.placeholder.com/500x750?text=No+Image"}
          alt={movie.title}
        />
        <div>
          <button className={`favrt-movie ${favourite ? "active" : ""}`} onClick={favrtMovie}>
            {favourite ? "Remove Fav" : "Add Fav"}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date ? movie.release_date.split("-")[0] : "Unknown"}</p>
      </div>
    </div>
  );
}

export default MovieCard;
