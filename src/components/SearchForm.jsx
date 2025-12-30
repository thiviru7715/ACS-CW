
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

            <select
                value={filters.minPrice}
                onChange={(e) =>
                    setFilters({ ...filters, minPrice: e.target.value })
                }
            >
                <option value="">Min price</option>
                <option value="50000">£50,000</option>
                <option value="100000">£100,000</option>
                <option value="200000">£200,000</option>
                <option value="300000">£300,000</option>
                <option value="400000">£400,000</option>
                <option value="500000">£500,000</option>
            </select>

            <select
                value={filters.maxPrice}
                onChange={(e) =>
                    setFilters({ ...filters, maxPrice: e.target.value })
                }
            >
                <option value="">Max price</option>
                <option value="100000">£100,000</option>
                <option value="200000">£200,000</option>
                <option value="300000">£300,000</option>
                <option value="400000">£400,000</option>
                <option value="500000">£500,000</option>
                <option value="600000">£600,000</option>
                <option value="700000">£700,000</option>
                <option value="800000">£800,000</option>
                <option value="900000">£900,000</option>
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