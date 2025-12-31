import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

function FavouritesPanel() {
  const { favourites, addFavourite, removeFavourite, clearFavourites } =
    useContext(FavouritesContext);

  return (
    <div
      className="favourites-panel"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("application/json");
        if (data) {
          const property = JSON.parse(data);
          addFavourite(property);
        }
      }}
    >
      <h3>Favourites</h3>

      {favourites.map((p) => (
        <div key={p.id} className="favourite-item">
          <img src={p.images[0]} alt={p.title} />
          <p>{p.title}</p>
          <button onClick={() => removeFavourite(p.id)}>✕</button>
        </div>
      ))}

      {favourites.length > 0 && (
        <button onClick={clearFavourites}>Clear all</button>
      )}
    </div>
  );
}

export default FavouritesPanel;
