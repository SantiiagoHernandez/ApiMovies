import React, { useState } from 'react';

const Search = ({ onSearch }) => {

  // Local state to store the search string
  const [query, setQuery] = useState('');

  // Function to handle the search and call the function provided as prop
  const handleSearch = () => {
    onSearch(query);
  };

  // Render search component with an input field and a button
  return (
    <div className="search">
      {/* Input field controlled by the local 'query' state' */}
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      
      {/* Button to start search on click */}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
