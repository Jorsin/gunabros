import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav id="pagination-container">
      <div className='pagination'>
        {pageNumbers.map(number => (
          <button key={number} onClick={() => paginate(number)} className={number === currentPage ? "page-link curr-page" : "page-link"}>
            {number}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
