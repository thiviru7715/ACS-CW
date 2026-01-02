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
    addedAfter: "",
  });

  const [activeFilters, setActiveFilters] = useState({
    postcode: "",
    type: "",
    minBeds: "",
    maxBeds: "",
    minPrice: "",
    maxPrice: "",
    addedAfter: "",
  });

  const handleSearch = () => {
    setActiveFilters(filters);
  };

  const filteredProperties = properties.filter((p) => {
    // Filter by added date
    if (activeFilters.addedAfter) {
      const propertyDate = new Date(
        `${p.added.month} ${p.added.day}, ${p.added.year}`
      );
      const filterDate = new Date(activeFilters.addedAfter);

      // Reset time parts for accurate date comparison
      propertyDate.setHours(0, 0, 0, 0);
      filterDate.setHours(0, 0, 0, 0);

      if (propertyDate < filterDate) {
        return false;
      }
    }
    if (
      activeFilters.postcode &&
      !p.postcode.startsWith(activeFilters.postcode.toUpperCase())
    ) {
      return false;
    }

    if (activeFilters.type && p.type !== activeFilters.type) {
      return false;
    }

    if (activeFilters.minBeds && p.bedrooms < Number(activeFilters.minBeds)) {
      return false;
    }

    if (activeFilters.maxBeds && p.bedrooms > Number(activeFilters.maxBeds)) {
      return false;
    }

    if (activeFilters.minPrice && p.price < Number(activeFilters.minPrice)) {
      return false;
    }

    if (activeFilters.maxPrice && p.price > Number(activeFilters.maxPrice)) {
      return false;
    }

    return true;
  });

  return (
    <div className="container">

      <SearchForm
        filters={filters}
        setFilters={setFilters}
        onSearch={handleSearch}
      />

      <div className="results">
        {filteredProperties.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}

      </div>
    </div>
  );
}

export default SearchPage;
