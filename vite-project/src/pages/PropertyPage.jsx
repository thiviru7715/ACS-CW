import { useParams } from "react-router-dom";
import properties from "../data/properties.json";

function PropertyPage() {
  const { id } = useParams();
  const property = properties.find(
    (p) => p.id === id
  );

  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <div className="property-page">
      <h1>{property.title}</h1>
      <img src={property.images[0]} alt={property.title} />

      {/* PROPERTY SUMMARY */}
      <div className="property-summary">
        <h2>£{property.price}</h2>
        <p>{property.location}</p>
        <p>
          {property.bedrooms} Bedroom {property.type}
        </p>
      </div>

      {/* PROPERTY DETAILS */}
      <div className="property-details">
        <h3>Description</h3>
        <p>{property.description}</p>
      </div>

      <section>
        <h3>Floor Plan</h3>
        <img
          src={property.floorPlan}
          alt="Floor Plan"
          className="floor-plan"
        />
      </section>

      {/* DATE ADDED */}
      <h3>Date Added</h3>
      <p>{property.added.month} {property.added.day}, {property.added.year}</p>
    </div>
  );
}

export default PropertyPage;
