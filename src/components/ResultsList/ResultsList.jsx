import React from 'react';

const ResultsList = ({ hosts }) => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                IPv4 Hosts
              </th>

              <th scope="col" className="px-6 py-3">
                Number of Protocols
              </th>
            </tr>
          </thead>
          <tbody>
            {hosts.map((host, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {host?.ip}
                </th>
                <td className="px-6 py-4">{host?.services?.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ResultsList;
