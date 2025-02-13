const API_KEY = "c4f27d17ab525b2b8d1ea244279d0001";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const datav = await response.json();
  return datav.results; // ✅ Fix: Use datav.results
};

export const SearchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  const datav = await response.json();
  return datav.results; // ✅ Fix: Use datav.results
};
