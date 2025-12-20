import { useState } from "react";
import SearchForm from "../components/SearchForm";
import properties from "../data/properties.json";
import PropertyCard from "../components/PropertyCard";

function SearchPage() {
  const [filters, setFilters]=useState({
    postcode: "",
    type: "",
    minBeds: "",
    maxPrice: "",
  });



  return (
    <div className="container">
      <h1>PropertyFinder</h1>

      <SearchForm filters={filters} setFilters={setFilters} />

      <div className="results">
        {properties.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
