import LoadingDots from '@components/loadingDots';
import { View } from 'react-native';

function SplashScreen() {
  return (
    <View className="flex-1 items-center justify-center gap-8">
      <LoadingDots />
    </View>
  );
}

export default SplashScreen;
