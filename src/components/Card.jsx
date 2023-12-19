// Card functional component that receives the information from a film as a prop
const Card = ({ movie }) => {

  // Construct the URL of the movie poster or use a placeholder if there is no poster
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/150';

  // Function to truncate text to a maximum length
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...'; // If the text is longer, truncate it and add ellipses.
    }
    return text; 
  };

  return (

    <div className="card">
      <img src={posterUrl} alt={movie.title} /> {/* Display poster or placeholder image */}
      <h2>{movie.title}</h2> {/* Show movie title */}
      <p>{truncateText(movie.overview, 70)}</p> {/* Show a truncated description of the movie */}
    </div>

  );
  
};

export default Card;