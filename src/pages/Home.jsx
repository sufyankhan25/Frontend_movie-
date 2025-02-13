import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard.jsx";
import "../css/Home.css";
import { SearchMovies, getPopularMovies } from "../services/api.js";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies); // ✅ Fix: Set movies, not searchQuery
      } catch (err) {
        console.log(err);
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies(); // ✅ Fix: Call the function
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return;

    try {
      setLoading(true);
      const searchedMovies = await SearchMovies(searchQuery);
      setMovies(searchedMovies);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies");
    } finally {
      setLoading(false);
    }
    
    setSearchQuery(""); // ✅ Clear input after search
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="form-searched">
        <input
          type="text"
          placeholder="Search for Movie"
          className="Search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="Search-button">Search</button>
      </form>

      {loading && <p>Loading movies...</p>}
      {error && <p className="error">{error}</p>}

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
