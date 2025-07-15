// src/contexts/Favorites.js
import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addFavorite(video) {
    const alreadyFavorite = favorites.some((fav) => fav.id === video.id);

    if (alreadyFavorite) {
      // Remove o vídeo dos favoritos
      setFavorites((prev) => prev.filter((fav) => fav.id !== video.id));
    } else {
      // Adiciona o vídeo aos favoritos
      setFavorites((prev) => [...prev, video]);
    }
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoriteContext() {
  return useContext(FavoritesContext);
}
