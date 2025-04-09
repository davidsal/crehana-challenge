import LoadingDots from '@components/loadingDots';
import { Ionicons } from '@expo/vector-icons';
import useColors from '@hooks/useColors';
import COLORS from '@theme/colors';
import { Text, View } from 'react-native';

type LoadingScreenProps = {
  text?: boolean;
};

// Displays a loding screen with an optional text with the app's name
const LoadingScreen = ({ text = false }: LoadingScreenProps) => {
  const primaryColor = useColors(COLORS.primary);
  const backgroundColor = useColors(COLORS.background);

  return (
    <View
      style={{ backgroundColor: text ? primaryColor : undefined }}
      className="flex-1 items-center justify-center gap-8 dark:bg-primary-dark">
      {text ? (
        <>
          <Ionicons name="location-outline" size={90} color={backgroundColor} />
          <Text className="font-poppins-bold text-4xl text-background">Country Picker</Text>
        </>
      ) : (
        <LoadingDots />
      )}
    </View>
  );
};

export default LoadingScreen;
