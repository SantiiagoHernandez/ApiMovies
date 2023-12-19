import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";

const App = () => {

  // Local states using React Hooks
  const [movies, setMovies] = useState([]); // Stores the movie lists
  const [currentPage, setCurrentPage] = useState(1); // Stores the current page
  const [totalPages, setTotalPages] = useState(1); // Stores the total number of pages
  const [searchQuery, setSearchQuery] = useState(''); // Stores the search string
  const [selectedGenre, setSelectedGenre] = useState(''); // Stores the selected genre

  // Side effect to load data from the API when dependencies change
  useEffect(() => {

    // Asynchronous function to perform API call
    const fetchData = async () => {

      try {
        const apiKey = '68c2e8775e468b4794b0dfdf0fc85dbe';
        const baseUrl = 'https://api.themoviedb.org/3';
        let endpoint = '/discover/movie';

        // Modify the endpoint if there is a search string
        if (searchQuery) {
          endpoint = '/search/movie';
        }

        // Parameters for the API call
        const params = {
          api_key: apiKey,
          page: currentPage,
          query: searchQuery,
          with_genres: selectedGenre,
        };

        // Perform API call using Axios
        const response = await axios.get(`${baseUrl}${endpoint}`, { params });

        // Update status with call results
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        // Handle console errors in case of API call failure
        console.error('Error al cargar datos:', error);

      }

    };

    // Call the fetchData function when mounting the component and when dependencies change
    fetchData();
  }, [currentPage, searchQuery, selectedGenre]);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to manage movie search
  const handleSearch = (query) => {
    // Update search string and reset page to one
    setSearchQuery(query);
    setCurrentPage(1);
  };

  // Function to manage the filter by gender
  const handleFilter = (genre) => {
    // Update the selected genre and reset the page to one
    setSelectedGenre(genre);
    setCurrentPage(1);
  };

  // Render the main component
  return (

    <div className="app">

      <div className="buscar">
        {/* Navigation bar */}
        <Navbar />
        {/* Search component */}
        <Search onSearch={handleSearch} />
        {/* Filter component by gender */}
        <Filter onFilter={handleFilter} />
      </div>

      {/* Mapping and rendering of film cards */}
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}

      {/* Paging component*/}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      
    </div>

  );

};

export default App;