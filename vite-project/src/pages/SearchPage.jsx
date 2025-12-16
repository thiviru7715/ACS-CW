import properties from "../data/properties.json";
import PropertyCard from "../components/PropertyCard";

function SearchPage() {
  return (
    <div className="container">
      <h1>PropertyFinder</h1>

      <div className="results">
        {properties.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
