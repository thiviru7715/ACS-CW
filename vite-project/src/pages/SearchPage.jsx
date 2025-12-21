import { useState } from "react";
import SearchForm from "../components/SearchForm";
import properties from "../data/properties.json";
import PropertyCard from "../components/PropertyCard";

function SearchPage() {
  const [filters, setFilters] = useState({
    postcode: "",
    type: "",
    minBeds: "",
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

    // if (filters.minBeds && p.bedrooms < Number(filters.minBeds)) {
    //   return false;
    // }

    // if (filters.maxBeds && p.bedrooms > Number(filters.maxBeds)) {
    //   return false;
    // }

    return true;
  });

  return (
    <div className="container">
      <h1>PropertyFinder</h1>

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
