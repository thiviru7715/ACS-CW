
function SearchForm({ filters, setFilters, onSearch }) {
    return (
        <div className="search-form">
            <input
                type="text"
                placeholder="Postcode area eg SW1"
                value={filters.postcode}
                onChange={(e) =>
                    setFilters({ ...filters, postcode: e.target.value })
                }
            />

            <select
                value={filters.type}
                onChange={(e) =>
                    setFilters({ ...filters, type: e.target.value })
                }
            >
                <option value="">Any type</option>
                <option value="House">House</option>
                <option value="Flat">Flat</option>
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

            <button
                className="search-btn"
                onClick={onSearch}
            >
                Search
            </button>
        </div>
    );
}
export default SearchForm;