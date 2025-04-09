import { Ionicons } from '@expo/vector-icons';
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

const videoSource = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

export default function HlsVideoPlayer() {
  const [progress, setProgress] = useState(0);

  // Initialize the video player and autoplay in loop mode
  const player = useVideoPlayer(videoSource, (p) => {
    p.loop = true;
    p.play();
  });

  // Subscribe to playback state (play/pause)
  const { isPlaying } = useEvent(player, 'playingChange', {
    isPlaying: player.playing,
  });

  const togglePlay = () => (isPlaying ? player.pause() : player.play());

  // Update playback progress every 500ms
  useEffect(() => {
    const id = setInterval(() => {
      if (player.duration > 0) {
        setProgress((player.currentTime / player.duration) * 100);
      }
    }, 500);
    return () => clearInterval(id);
  }, [player]);

  return (
    <>
      <VideoView player={player} allowsFullscreen style={{ width: '100%', height: 230 }} />

      <View className="mt-4 flex-row items-center gap-4 rounded-md bg-border p-4">
        <TouchableOpacity onPress={togglePlay} className="rounded-full bg-primary p-3">
          <Ionicons name={isPlaying ? 'pause' : 'play'} size={30} color="#fff" />
        </TouchableOpacity>

        <View className="h-2 flex-1 overflow-hidden rounded-full bg-white/30">
          <View className="h-full bg-primary" style={{ width: `${progress}%` }} />
        </View>
      </View>
    </>
  );
}
