export type Country = {
  name: string;
  code: string;
  capital: string;
  continent: { name: string };
  languages: { name: string }[];
  currency: string;
  emojiU: string;
};

export type RootStackParamList = {
  CountryList: undefined;
  CountryDetails: { code: string };
};
