import { Ionicons } from '@expo/vector-icons';
import useColors from '@hooks/useColors';
import COLORS from '@theme/colors';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, TextInput, TouchableOpacity } from 'react-native';

const SearchBar = ({ onChange }: { onChange: (query: string) => void }) => {
  const [searchText, setSearchText] = useState('');
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const borderColor = useColors(COLORS.border);
  const { t } = useTranslation();

  const handleChange = (text: string) => {
    setSearchText(text);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      onChange(text);
    }, 250);

    setTimeoutId(newTimeoutId);
  };

  const handleClear = () => {
    setSearchText('');
    onChange('');
  };

  return (
    <View className="border-border flex-row items-center rounded-md border bg-white px-2">
      <Ionicons name="search" size={20} color={borderColor} />

      <TextInput
        value={searchText}
        onChangeText={handleChange}
        placeholder={`${t('screen.countryList.search')}...`}
        className="ml-2 flex-1 font-poppins  text-onBackground"
      />

      {searchText.length > 0 && (
        <TouchableOpacity onPress={handleClear}>
          <Ionicons name="close-circle" size={20} color={borderColor} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
