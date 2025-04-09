import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { useEffect } from 'react';

const useLocalization = () => {
  useEffect(() => {
    const deviceLanguage = Localization.getLocales()[0]?.languageCode;
    i18n.changeLanguage(deviceLanguage || 'en');
  }, []);
};

export default useLocalization;
