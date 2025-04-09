import { CountriesContext } from '@contexts/countriesContext';
import { useContext } from 'react';

const useCountries = () => {
  const context = useContext(CountriesContext);
  if (!context) {
    throw new Error('useCountriesContext must be used within a CountriesProvider');
  }
  return context;
};

export default useCountries;
