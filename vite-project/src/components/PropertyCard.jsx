import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img src={property.images[0]} alt={property.title} />
      <h3>£{property.price}</h3>
      <p>{property.title}</p>
      <p>{property.location}</p>
      <p>{property.bedrooms} Bedrooms</p>

      <Link to={`/property/${property.id}`}>View Details</Link>
    </div>
  );
}

export default PropertyCard;
