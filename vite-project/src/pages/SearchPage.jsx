import properties from "../data/properties.json";

function SearchPage() {
    console.log(properties);
  return (
    <div className="container">
      <h1>PropertyFinder</h1>

      <div className="results">
        {properties.map((p) => (
          <div key={p.id}>
            <h3>{p.title}</h3>
            <p>£{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
