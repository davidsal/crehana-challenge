import { View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

type AppContainerProps = {
  children: React.ReactNode;
};

export default function AppContainer({ children }: AppContainerProps) {
  return (
    <View className="bg-background flex-1">
      <SafeAreaView className="flex-1">
        <StatusBar style="auto" />
        {children}
      </SafeAreaView>
    </View>
  );
}
