import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'component.screenContainer.goBack': 'Go back',
      'screen.errorScreen.title': 'Error fetching countries',
      'screen.errorScreen.description': 'Please check your internet connection and try again.',
      'screen.errorScreen.button': 'Retry',
      'screen.countryDetailsScreen.details': 'Details',
      'screen.countryDetailsScreen.code': 'Code',
      'screen.countryDetailsScreen.capital': 'Capital',
      'screen.countryDetailsScreen.continent': 'Continent',
      'screen.countryDetailsScreen.currency': 'Currency',
      'screen.countryDetailsScreen.languages': 'Languages',
      'screen.countryList.clear': 'Clear Filter',
      'screen.countryList.select': 'Select',
      'screen.countryList.continent': 'Continent',
      'screen.countryList.currency': 'Currency',
      'screen.countryList.code': 'Code',
      'screen.countryList.all': 'All',
      'screen.countryList.search': 'Search',
      'screen.countryList.selectCountry': 'Select Country',
    },
  },
  es: {
    translation: {
      'component.screenContainer.goBack': 'Regresar',
      'screen.errorScreen.title': 'Error al obtener los países',
      'screen.errorScreen.description':
        'Por favor, verifica tu conexión a internet y vuelve a intentarlo.',
      'screen.errorScreen.button': 'Reintentar',
      'screen.countryDetailsScreen.details': 'Detalles',
      'screen.countryDetailsScreen.code': 'Código',
      'screen.countryDetailsScreen.capital': 'Capital',
      'screen.countryDetailsScreen.continent': 'Continente',
      'screen.countryDetailsScreen.currency': 'Moneda',
      'screen.countryDetailsScreen.languages': 'Idiomas',
      'screen.countryList.clear': 'Limpiar Filtro',
      'screen.countryList.select': 'Seleccionar',
      'screen.countryList.continent': 'Continente',
      'screen.countryList.currency': 'Moneda',
      'screen.countryList.code': 'Código',
      'screen.countryList.all': 'Todos',
      'screen.countryList.search': 'Buscar',
      'screen.countryList.selectCountry': 'Seleccionar País',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
