import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addtoFavourites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const RemoveFavourite = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavourite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = { favorites, addtoFavourites, isFavourite, RemoveFavourite };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};
