import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">

      {/* Button to go to the previous page, disabled if already on the first page. */}
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      
      {/* Display the current page number and total number of pages */}
      <span>{`Página ${currentPage} de ${totalPages}`}</span>
      
      {/* Button to go to the next page, disabled if you are already on the last page. */}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>

    </div>
  );
};

export default Pagination;