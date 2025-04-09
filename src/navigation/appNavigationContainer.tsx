import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CountryDetailsScreen from '@screens/countryDetailsScreen';
import CountryListScreen from '@screens/countryListScreen/countryListScreen';
import { RootStackParamList } from '@utils/types';

// Create a stack navigator for the app
const Stack = createNativeStackNavigator<RootStackParamList>();

// Define the navigation for the app
const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CountryList" component={CountryListScreen} />
        <Stack.Screen name="CountryDetails" component={CountryDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
