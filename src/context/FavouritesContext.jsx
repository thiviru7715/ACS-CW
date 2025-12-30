import { createContext, useState } from "react";

export const FavouritesContext = createContext();

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (property) => {
    if (!favourites.find((p) => p.id === property.id)) {
      setFavourites([...favourites, property]);
    }
  };

  const removeFavourite = (id) => {
    setFavourites(favourites.filter((p) => p.id !== id));
  };

  const clearFavourites = () => {
    setFavourites([]);
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourite, removeFavourite, clearFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}
