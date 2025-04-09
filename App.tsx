import './global.css';
import LoadingScreen from '@screens/loadingScreen';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { CountriesProvider } from '@contexts/countriesContext';
import AppNavigationContainer from '@navigation/appNavigationContainer';
import { ApolloProvider } from '@apollo/client';
import APOLLO_CLIENT from '@graphql/apolloClient';
import { StatusBar } from 'expo-status-bar';
import '@languages/i18n';
import useLocalization from '@hooks/useLocalization';

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    'Poppins-Light': require('@assets/fonts/Poppins-Light.ttf'),
    'Poppins-Regular': require('@assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('@assets/fonts/Poppins-Medium.ttf'),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useLocalization();

  if (fontsLoaded && isReady === true) {
    return (
      <ApolloProvider client={APOLLO_CLIENT}>
        <CountriesProvider>
          <StatusBar style="auto" />
          <AppNavigationContainer />
        </CountriesProvider>
      </ApolloProvider>
    );
  }

  return <LoadingScreen text />;
}
