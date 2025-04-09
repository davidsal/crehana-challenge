import ScreenContainer from '@components/screenContainer';
import useCountries from '@hooks/useCountries';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { convertToEmoji } from '@utils/helpers';
import { Country, RootStackParamList } from '@utils/types';
import { useState } from 'react';
import { FlatList, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import SearchBar from './components/searchBar';
import { useTranslation } from 'react-i18next';

type ModalType = '' | 'continent' | 'currency';

const getContinentDisplayValue = (value: string, t: (key: string) => string) => {
  return value.toUpperCase() === 'ALL' ? t('screen.countryList.all') : value.toUpperCase();
};

function CountryListScreen({ navigation }: NativeStackScreenProps<RootStackParamList>) {
  const { countries, continents, currencies } = useCountries();
  const [selectedContinent, setSelectedContinent] = useState('all');
  const [selectedCurrency, setSelectedCurrency] = useState('all');
  const [queryCountry, setQueryCountry] = useState('all');
  const [modalType, setModalType] = useState<ModalType>('');
  const { t } = useTranslation();

  const filteredCountries = countries.filter((country) => {
    return (
      (selectedContinent === 'all' || country.continent?.name === selectedContinent) &&
      (selectedCurrency === 'all' ||
        (country.currency?.split(',').map((c) => c.trim()) ?? []).includes(selectedCurrency)) &&
      (queryCountry === 'all' || country.name.toLowerCase().includes(queryCountry.toLowerCase()))
    );
  });

  const handleModalClose = () => setModalType('');
  const handleSelectFilter = (type: 'continent' | 'currency', item: string) => {
    if (type === 'continent') setSelectedContinent(item);
    else setSelectedCurrency(item);
    handleModalClose();
  };

  const handleClearFilter = () => {
    if (modalType === 'continent') setSelectedContinent('all');
    else setSelectedCurrency('all');
    handleModalClose();
  };

  const renderFilterButton = (label: string, value: string, type: ModalType) => (
    <TouchableOpacity
      onPress={() => setModalType(type)}
      className="bg-border/10 flex-1 items-center justify-center rounded-md p-2">
      <Text className="font-poppins-bold text-lg text-onBackground">{label}</Text>
      <Text className="mt-1 font-poppins text-onBackground">
        {getContinentDisplayValue(value, t)}
      </Text>
    </TouchableOpacity>
  );

  const renderCountryItem = (country: Country) => (
    <TouchableOpacity
      className="gap-2 py-2"
      key={country.name}
      onPress={() => navigation.navigate('CountryDetails', { code: country.code })}>
      <View className="flex-row items-center gap-1 ">
        <Text className="text-2xl text-onBackground">{convertToEmoji(country.emojiU)}</Text>
        <Text className="ml-3 font-poppins text-xl text-onBackground">{country.name}</Text>
      </View>
      <View className="flex-row items-center gap-2 ">
        <Text>
          <Text className="font-poppins-bold text-sm text-onBackground">
            {t('screen.countryList.code')}:{' '}
          </Text>
          <Text className="font-poppins text-sm text-onBackground">{country.code}</Text>
        </Text>
        <Text>
          <Text className="font-poppins-bold text-sm text-onBackground">
            {t('screen.countryList.continent')}:{' '}
          </Text>
          <Text className="font-poppins text-sm text-onBackground">{country.continent.name}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScreenContainer showGoBack={false}>
      <View className="flex-1 gap-5 ">
        <Text className="font-poppins-bold text-2xl">{t('screen.countryList.selectCountry')}</Text>
        <SearchBar onChange={(searchQuery) => setQueryCountry(searchQuery || 'all')} />

        <View className="flex-row items-center gap-2">
          {renderFilterButton(t('screen.countryList.continent'), selectedContinent, 'continent')}
          {renderFilterButton(t('screen.countryList.currency'), selectedCurrency, 'currency')}
        </View>

        <Modal
          animationType="slide"
          transparent
          visible={!!modalType}
          onRequestClose={handleModalClose}>
          <View className="flex-1 bg-background p-8">
            <View style={{ gap: 32, flex: 1 }}>
              <Text className="font-poppins-bold text-2xl">
                {t('screen.countryList.select')}{' '}
                {modalType === 'continent'
                  ? t('screen.countryList.continent')
                  : t('screen.countryList.currency')}
              </Text>

              <FlatList
                scrollEnabled
                contentContainerStyle={{ gap: 10 }}
                data={modalType === 'continent' ? continents : currencies}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    className="py-2"
                    onPress={() =>
                      handleSelectFilter(modalType === 'continent' ? 'continent' : 'currency', item)
                    }>
                    <Text className="font-poppins text-lg">{item}</Text>
                  </TouchableOpacity>
                )}
              />

              <TouchableOpacity
                onPress={handleClearFilter}
                className=" align-center items-center rounded-md bg-primary p-4">
                <Text className="font-poppins-bold text-background">
                  {t('screen.countryList.clear')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <ScrollView className="flex-1" contentContainerStyle={{ gap: 8 }}>
          {filteredCountries.map(renderCountryItem)}
        </ScrollView>
      </View>
    </ScreenContainer>
  );
}

export default CountryListScreen;
