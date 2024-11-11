import { useEffect, useState } from 'react';
import { fetchApiData } from '../services/censysAPI';
import Pagination from '../components/Pagination/Pagination';
import ResultsList from '../components/ResultsList/ResultsList';
import SearchBar from '../components/SearchBar/SearchBar';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [hosts, setHosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [paginationLinks, setPaginationLinks] = useState({
    next: null,
    prev: null,
  });

  const fetchHosts = async (query, cursor = null) => {
    setLoading(true);
    try {
      const response = await fetchApiData(query, cursor);
      setHosts(response.result.hits);
      setPaginationLinks({
        next: response.result.links?.next,
        prev: response.result.links?.prev,
      });
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHosts();
  }, []);

  useEffect(() => {
    if (query) fetchHosts(query);
  }, [query]);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ResultsList hosts={hosts} />
      <Pagination
        paginationLinks={paginationLinks}
        fetchHosts={fetchHosts}
        query={query}
      />
    </div>
  );
};

export default HomePage;
