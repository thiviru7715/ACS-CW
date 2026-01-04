import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

function FavouritesPanel() {
  // Access global favourites state and actions from Context
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
      <hr className="divider" />

      {/* Conditional Rendering: Show empty state if no favourites, otherwise list items */}
      {favourites.length === 0 ? (
        <div className="empty-state">
          <p className="title">No favourites yet</p>
          <p className="subtitle">
            Click "Add to favourite" or drag properties here
          </p>
        </div>
      ) : (
        <>
          {/* List of Favourite Items */}
          {favourites.map((p) => (
            <div key={p.id} className="favourite-item">
              <img src={p.images[0]} alt={p.title} />
              <p>{p.title}</p>
              {/* Button to remove a single item */}
              <button onClick={() => removeFavourite(p.id)}>✕</button>
            </div>
          ))}

          {/* Button to clear all favourites at once */}
          <button onClick={clearFavourites} className="clear-btn">
            Clear all
          </button>
        </>
      )}
    </div>
  );
}

export default FavouritesPanel;
