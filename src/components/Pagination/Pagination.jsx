const Pagination = ({ paginationLinks, fetchHosts, query }) => {
  console.log('in the component',paginationLinks);
  return (
    <>
      <div className="flex">
        <button
          onClick={() => {
            fetchHosts(query, paginationLinks?.prev);
          }}
          disabled={!paginationLinks?.prev}
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Previous
        </button>

        <button
          onClick={() => {
            fetchHosts(query, paginationLinks?.next);
          }}
          disabled={!paginationLinks?.next}
          className="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
