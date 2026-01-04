import { useParams } from "react-router-dom";
import { useState } from "react";
import properties from "../data/properties.json";
import ImageGallery from "../components/ImageGallery";
import PropertyTabs from "../components/PropertyTabs.jsx";

function PropertyPage() {
  const { id } = useParams();
  // find property by id in the static dataset
  const property = properties.find(
    (p) => p.id === id
  );

  // If no property matches the id, show a friendly message.
  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <div className="property-page">
      
      <h1>{property.title}</h1>

      {/* Property summary: price, location, type, and image gallery */}
      <div className="property-summary">
        <h2>£{property.price}</h2>
        <p>Postcode : {property.postcode}</p>
        <p>📍 Location : {property.location}</p>
        <p>
          🏠 {property.bedrooms} Bedroom {property.type}
        </p>
        {/* ImageGallery receives an array of image URLs for this property */}
        <ImageGallery images={property.images} />
      </div>

      {/* PropertyTabs shows description, features, and contact info (see component) */}
      <PropertyTabs property={property} />

      {/* DATE ADDED (stored as an object with month/day/year) */}
      <h3>Date Added</h3>
      <p>{property.added.month} {property.added.day}, {property.added.year}</p>

    </div>
  );
}

export default PropertyPage;
