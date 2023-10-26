import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoAPI } from "../../API";
import "./search.css";

const Search = ({ onSearchChange }) => {
  // Set search state
  const [search, setSearch] = useState(null);
  // Handle search change
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  // Load additional search options
  const loadOptions = (inputValue) => {
    return fetch(`${GEO_API_URL}/cities?namePrefix=${inputValue}`, geoAPI)
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude}, ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((error) => console.log(error));
  };

  return (
    <AsyncPaginate
      className="search-bar"
      placeholder="Search for a city.."
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
