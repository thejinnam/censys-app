import React from 'react';

const Pagination = ({ paginationLinks, fetchHosts, query }) => {
  return (
    <>
      <div className="flex">
        <button
          onClick={() => {
            fetchHosts(query, paginationLinks?.prev);
          }}
          disabled={!paginationLinks?.prev}
          className={`flex items-center justify-center px-4 h-10 text-base font-medium ${
            !paginationLinks.prev
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700'
          } border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`}
        >
          Previous
        </button>

        <button
          onClick={() => {
            fetchHosts(query, paginationLinks?.next);
          }}
          disabled={!paginationLinks?.next}
          className={`flex items-center justify-center px-4 h-10 text-base font-medium ${
            !paginationLinks.next
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700'
          } border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
