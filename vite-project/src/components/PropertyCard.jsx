import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <>
      <div className="property-card">
        <img src={property.images[0]} alt={property.title} />
        <h3>£{property.price}</h3>
        <p>{property.type}</p>
        <p>{property.location}</p>
        <p>{property.bedrooms} Bedrooms</p>
        <p>{property.shortDescription}</p>
        <Link to={`/property/${property.id}`}>View Details</Link>
        <button
            className="favourite-btn"
            onClick={() => onFavourite(property)}
          >
            ❤️ Favourite
          </button>
      </div>
    </>
  );
}

export default PropertyCard;
