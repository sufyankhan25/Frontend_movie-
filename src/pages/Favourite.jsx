import { useEffect } from "react";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import "../css/Favourite.css";

function Favourite() {
  const { favorites } = useMovieContext();

  useEffect(() => {
    console.log("Favorites Updated:", favorites);
  }, [favorites]);

  return (
    <div className="favourite-page">
      <h2>Your Favorite Movies</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourite;
