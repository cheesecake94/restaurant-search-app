import { useState, useEffect } from 'react';
import yelpService from '../services/yelp.service'

export default () => {
  const [businesses, setBusinesses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchBusinesses = async (searchTerm) => {
    try {
      const response = await yelpService.get('/search', {
        params: {
          term: searchTerm,
          limit: 50,
          location: 'Aarhus, Denmark'
        }
      });
      setBusinesses(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    searchBusinesses('pasta');
  }, []);

  return [searchBusinesses, businesses, errorMessage]
};