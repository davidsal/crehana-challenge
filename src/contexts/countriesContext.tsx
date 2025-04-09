import { useQuery } from '@apollo/client';
import { GET_COUNTRIES_GRAPHQL_QUERY } from '@graphql/queries';
import ErrorScreen from '@screens/errorScreen';
import LoadingScreen from '@screens/loadingScreen';
import { Country } from '@utils/types';
import { createContext, ReactNode, useEffect, useState } from 'react';

type CountriesContextType = {
  countries: Country[];
  continents: string[];
  currencies: string[];
};

type CountriesResponse = {
  countries: Country[];
};

type CountriesProviderProps = {
  children: ReactNode;
};

// Extracts unique arrays of continents and currencies
const extractMetadata = (countries: Country[] = []) => {
  const continentSet = new Set<string>();
  const currencySet = new Set<string>();

  countries.forEach((country) => {
    if (country.continent?.name) {
      continentSet.add(country.continent.name);
    }

    if (country.currency) {
      const currencies = country.currency.split(',').map((c) => c.trim());
      currencies.forEach((curr) => {
        if (curr) currencySet.add(curr);
      });
    }
  });

  return {
    continents: Array.from(continentSet).sort(),
    currencies: Array.from(currencySet).sort(),
  };
};

export const CountriesContext = createContext<CountriesContextType | undefined>(undefined);

export const CountriesProvider = ({ children }: CountriesProviderProps) => {
  const [isReady, setIsReady] = useState(false);

  const { loading, error, data, refetch } = useQuery<CountriesResponse>(
    GET_COUNTRIES_GRAPHQL_QUERY
  );

  // Avoids the loading screen flicker when the query is too fast
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading || !isReady) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen onRetry={() => refetch()} />;
  }

  const countries = data?.countries ?? [];
  const { continents, currencies } = extractMetadata(countries);

  return (
    <CountriesContext.Provider value={{ countries, continents, currencies }}>
      {children}
    </CountriesContext.Provider>
  );
};
