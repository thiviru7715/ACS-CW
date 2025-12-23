import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

function PropertyCard({ property }) {
  const { addFavourite } = useContext(FavouritesContext);

  return (
    <>
      <div className="property-card">
        <Link to={`/property/${property.id}`}>
          <img src={property.images[0]} alt={property.title} />
          <h3>£{property.price}</h3>
          <p>📍{property.location}</p>
          <p>🏠{property.type} | {property.bedrooms} Bedrooms</p>
          <p>{property.shortDescription}</p>
        </Link>
        <button
          className="favourite-btn"
          onClick={() => addFavourite(property)}
        >
          ❤️ Save
        </button>
      </div>
    </>
  );
}

export default PropertyCard;
