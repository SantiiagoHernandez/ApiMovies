import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Necessary dependence

const Filter = ({ onFilter }) => {

  // Local status for storing the genre list and the selected gener
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const apiKey = '68c2e8775e468b4794b0dfdf0fc85dbe';
        const baseUrl = 'https://api.themoviedb.org/3';
        const endpoint = '/genre/movie/list';
        const params = {
          api_key: apiKey,
        };

        const response = await axios.get(`${baseUrl}${endpoint}`, { params });
        setGenres(response.data.genres);
      } catch (error) {
        // Handle console errors in case of API call failure
        console.error('Error:', error);
      }
    };

    fetchGenres();
  }, []);

  // Function to handle the change of gender and call the function provided as prop.
  const handleGenreChange = (event) => {
    const genreId = event.target.value;
    setSelectedGenre(genreId);
    onFilter(genreId);
  };

  return (
    <div className="filter">

      <label htmlFor="genre">Genre: </label>

      {/* Drop-down menu for gender selection */}
      <select id="genre" onChange={handleGenreChange} value={selectedGenre}>

        <option value="">All</option>

        {/* Mapping and rendering menu options from the genre list */}
        {genres.map((genre) => (

          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>

        ))}

      </select>

    </div>
  );
};

export default Filter;
