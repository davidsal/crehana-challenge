import { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';

const Dot = ({ delay }: { delay: number }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = () => {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.delay(300),
      ]).start(() => animate());
    };

    const timeout = setTimeout(() => {
      animate();
    }, delay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Animated.View
      className="bg-primary dark:bg-onBackground-dark mx-1 h-3 w-3 rounded-full"
      style={{ opacity }}
    />
  );
};

const LoadingDots = () => {
  return (
    <View className="flex flex-row items-center justify-center">
      <Dot delay={0} />
      <Dot delay={300} />
      <Dot delay={600} />
    </View>
  );
};

export default LoadingDots;
