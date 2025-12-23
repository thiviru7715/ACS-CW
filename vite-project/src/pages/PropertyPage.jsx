import { useParams } from "react-router-dom";
import { useState } from "react";
import properties from "../data/properties.json";
import ImageGallery from "../components/ImageGallery";
import PropertyTabs from "../components/PropertyTabs.jsx";

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
        <p>Postcode: {property.postcode}</p>
        <p>Location  :{property.location}</p>
        <p>
          {property.bedrooms} Bedroom {property.type}
        </p>
        <ImageGallery images={property.images} />
      </div>

      <PropertyTabs property={property} />

      {/* DATE ADDED */}
      <h3>Date Added</h3>
      <p>{property.added.month} {property.added.day}, {property.added.year}</p>

    </div>
    
  );

}

export default PropertyPage;
