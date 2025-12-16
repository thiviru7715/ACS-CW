import { useParams } from "react-router-dom";
import properties from "../data/properties.json";

function PropertyPage() {
  const { id } = useParams();
  const property = properties.find(
    (p) => p.id === Number(id)
  );

  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <div className="property-page">
      <h1>{property.title}</h1>
      <img src={property.images[0]} alt={property.title} />
      <p>£{property.price}</p>
      <p>{property.location}</p>
      <p>{property.longDescription}</p>
    </div>
  );
}

export default PropertyPage;
