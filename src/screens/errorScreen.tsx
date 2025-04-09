import { Ionicons } from '@expo/vector-icons';
import useColors from '@hooks/useColors';
import COLORS from '@theme/colors';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';

// Screen displayed when there is an error fetching the countries
const ErrorScreen = ({ onRetry }: { onRetry: () => void }) => {
  const onBackgroundColor = useColors(COLORS.onBackground);
  const { t } = useTranslation();

  return (
    <View className="flex-1 items-center justify-center gap-4 p-5">
      <Ionicons name="sad-outline" size={90} color={onBackgroundColor} />
      <Text className="mb-2 text-center font-poppins-bold text-xl">
        {t('screen.errorScreen.title')}
      </Text>
      <Text className="text-center font-poppins text-base text-gray-600">
        {t('screen.errorScreen.description')}
      </Text>
      <TouchableOpacity onPress={onRetry} className="mt-3 rounded-sm bg-primary px-8 py-2">
        <Text className="p-1 font-poppins-bold text-base text-white">
          {t('screen.errorScreen.button')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ErrorScreen;
