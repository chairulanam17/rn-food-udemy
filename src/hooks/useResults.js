import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [pesanError, setPesanError] = useState('');
  //   const [refresh, setRefresh] = useState(null);

  const searchApi = async (searchTerm) => {
    console.log('woy bro!');
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setPesanError('Ada yang salah nih');
    }
  };
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, pesanError];
  //   useEffect(() => {
  //     if (refresh) searchApi('coffee');
  //   }, [refresh]);
};
