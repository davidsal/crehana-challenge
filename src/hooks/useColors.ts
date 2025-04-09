import { useColorScheme } from 'nativewind';

type ColorType = {
  light: string;
  dark: string;
};

const useColors = (color: ColorType) => {
  const { colorScheme } = useColorScheme();
  return color[colorScheme || 'light'];
};

export default useColors;
