
function SearchForm({ filters, setFilters }) {
  return (
    <div className="search-form">
        <input 
            type="text" 
            placeholder="Postcode area eg SW1"
            value={filters.postcode} 
            />

            <select
                value={filters.type}
                onChange={(e) =>
                setFilters({ ...filters, type: e.target.value })
                }
            >
                <option value="">Any type</option>
                <option value="house">House</option>
                <option value="flat">Flat</option>
            </select>

            <select
                value={filters.minBeds}
                onChange={(e) =>
                setFilters({ ...filters, minBeds: e.target.value })
                }
            >
                <option value="">Min beds</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>

            <select
                value={filters.maxBeds}
                onChange={(e) =>
                setFilters({ ...filters, maxBeds: e.target.value })
                }
            >
                <option value="">Max beds</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
    </div>
  );
}
export default SearchForm;