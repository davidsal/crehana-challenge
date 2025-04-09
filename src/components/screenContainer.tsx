import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@utils/types';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScreenContainerProps = {
  children: React.ReactNode;
  showGoBack?: boolean;
};

// Container for screens with built-in go back button and safe area view
const ScreenContainer = ({ children, showGoBack = false }: ScreenContainerProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { t } = useTranslation();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 p-5">
        {showGoBack && (
          <TouchableOpacity onPress={navigation.goBack} className="mb-5 flex-row items-center">
            <Ionicons name="arrow-back" size={20} className="mr-1 text-onBackground" />
            <Text className="text-onBackgroud font-poppins-bold text-xl">
              {t('component.screenContainer.goBack')}
            </Text>
          </TouchableOpacity>
        )}

        {children}
      </View>
    </SafeAreaView>
  );
};

export default ScreenContainer;
