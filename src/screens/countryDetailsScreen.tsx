import HlsVideoPlayer from '@components/hlsVideoPlayer';
import ScreenContainer from '@components/screenContainer';
import useCountries from '@hooks/useCountries';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { convertToEmoji } from '@utils/helpers';
import { RootStackParamList } from '@utils/types';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';

type DetailEntryProps = {
  title: string;
  value: string;
};

type CountryDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'CountryDetails'>;

const DetailEntry = ({ title, value }: DetailEntryProps) => {
  return (
    <Text>
      <Text className="font-poppins text-lg">{title}: </Text>
      <Text className="font-poppins-bold text-xl text-onBackground">{value}</Text>
    </Text>
  );
};

const CountryDetailsScreen = ({ route }: CountryDetailsScreenProps) => {
  const { code: countryCode } = route.params;
  const { countries } = useCountries();
  const countryDetails = countries.find((contry) => contry.code === countryCode);
  const { t } = useTranslation();

  if (!countryDetails) throw new Error('Country not found');

  return (
    <ScreenContainer showGoBack>
      <ScrollView className="flex-1" contentContainerStyle={{ gap: 5 }}>
        <View className="items-center justify-center">
          <Text className="text-5xl">{convertToEmoji(countryDetails.emojiU)}</Text>
        </View>

        <Text className="text-center font-poppins-bold text-3xl">{countryDetails.name}</Text>

        <Text className="mb-2 border-b border-border py-3 font-poppins text-xl text-onBackground">
          {t('screen.countryDetailsScreen.details')}
        </Text>

        <DetailEntry title={t('screen.countryDetailsScreen.code')} value={countryDetails.code} />
        <DetailEntry
          title={t('screen.countryDetailsScreen.capital')}
          value={countryDetails.capital}
        />
        <DetailEntry
          title={t('screen.countryDetailsScreen.continent')}
          value={countryDetails.continent.name}
        />
        <DetailEntry
          title={t('screen.countryDetailsScreen.currency')}
          value={countryDetails.currency}
        />
        <DetailEntry
          title={t('screen.countryDetailsScreen.languages')}
          value={countryDetails.languages.map((language) => language.name).join(', ')}
        />

        <Text className="mb-2 border-b border-border py-3 font-poppins text-xl text-onBackground">
          Video HLS
        </Text>

        <HlsVideoPlayer />
      </ScrollView>
    </ScreenContainer>
  );
};

export default CountryDetailsScreen;
