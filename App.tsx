import AppContainer from '@components/appContainer';
import './global.css';
import SplashScreen from '@screens/splashScreen';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import ScreenContainer from '@components/screenContainer';

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

  return (
    <AppContainer>
      {fontsLoaded && isReady === true ? (
        <ScreenContainer>
          <Text className="font-poppins">Country Picker</Text>
        </ScreenContainer>
      ) : (
        <SplashScreen />
      )}
    </AppContainer>
  );
}
