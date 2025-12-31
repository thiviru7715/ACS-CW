import { useState } from "react";
import SearchForm from "../components/SearchForm";
import properties from "../data/properties.json";
import PropertyCard from "../components/PropertyCard";

function SearchPage() {
  const [filters, setFilters] = useState({
    postcode: "",
    type: "",
    minBeds: "",
    maxBeds: "",
    minPrice: "",
    maxPrice: "",
  });


  const filteredProperties = properties.filter((p) => {
    if (
      filters.postcode &&
      !p.postcode.startsWith(filters.postcode.toUpperCase())
    ) {
      return false;
    }

    if (filters.type && p.type !== filters.type) {
      return false;
    }

    if (filters.minBeds && p.bedrooms < Number(filters.minBeds)) {
      return false;
    }

    if (filters.maxBeds && p.bedrooms > Number(filters.maxBeds)) {
      return false;
    }

    if (filters.minPrice && p.price < Number(filters.minPrice)) {
      return false;
    }

    if (filters.maxPrice && p.price > Number(filters.maxPrice)) {
      return false;
    }

    return true;
  });

  return (
    <div className="container">

      <SearchForm filters={filters} setFilters={setFilters} />

      <div className="results">
        {filteredProperties.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}

      </div>
    </div>
  );
}

export default SearchPage;
