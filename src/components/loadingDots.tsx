import { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';

// Dot component handles individual animation of each dot
const Dot = ({ delay }: { delay: number }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Loop the animation of opacity for fading in and out
    const loop = () => {
      Animated.sequence([
        Animated.timing(opacity, { toValue: 1, duration: 600, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 0, duration: 600, useNativeDriver: true }),
        Animated.delay(300),
      ]).start(loop);
    };

    // Start the loop animation after the specified delay
    const id = setTimeout(loop, delay);
    return () => clearTimeout(id);
  }, [delay]);

  return <Animated.View className="mx-1 h-3 w-3 rounded-full bg-primary" style={{ opacity }} />;
};

// LoadingDots component handles the animation of three dots fading in and out
export default function LoadingDots() {
  return (
    <View className="flex-row items-center justify-center">
      {[0, 300, 600].map((delay) => (
        <Dot key={delay} delay={delay} />
      ))}
    </View>
  );
}
