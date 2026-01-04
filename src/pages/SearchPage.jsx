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
    // Determine the active filters based on user input when Search is clicked
    setActiveFilters(filters);
  };

  const filteredProperties = properties.filter((p) => {

    // 1. Date Filter: Checks if property was added after the selected date
    if (activeFilters.addedAfter) {
      const propertyDate = new Date(
        `${p.added.month} ${p.added.day}, ${p.added.year}`
      );
      const filterDate = new Date(activeFilters.addedAfter);

      // Reset time parts for accurate date comparison (ignore hours/minutes)
      propertyDate.setHours(0, 0, 0, 0);
      filterDate.setHours(0, 0, 0, 0);

      if (propertyDate < filterDate) {
        return false;
      }
    }

    // 2. Postcode Filter
    if (
      activeFilters.postcode &&
      !p.location
        .split(" ")
        .pop()
        .toLowerCase()
        .startsWith(activeFilters.postcode.toLowerCase())
    ) {
      return false;
    }

    // 3. Type Filter: Exact match (e.g., "House", "Flat")
    if (activeFilters.type && p.type !== activeFilters.type) {
      return false;
    }

    // 4. Bedroom Filters: Numeric comparison
    if (activeFilters.minBeds && p.bedrooms < Number(activeFilters.minBeds)) {
      return false;
    }

    if (activeFilters.maxBeds && p.bedrooms > Number(activeFilters.maxBeds)) {
      return false;
    }

    // 5. Price Filters: Numeric comparison
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
