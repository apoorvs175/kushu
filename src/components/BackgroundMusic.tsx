

import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Music } from 'lucide-react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement>(null);
  const location = useLocation();

  // Mapping of pages to audio tracks
  const musicTracks = {
    '/': { name: 'Welcome To The Era Of My Queen', url: '/music/a1.mp3' }, // Home
    '/timeline': { name: 'Path of Love For her', url: '/music/a2.mp3' }, // Timeline
    '/memories': { name: 'Kushu', url: '/music/a3.mp3' }, // Memories
    '/love-notes': { name: 'A letter in the world of Mail', url: '/music/a4.mp3' }, // Letters
    '/why-i-love-you': { name: 'My Love for her', url: '/music/a0.mp3' }, // Reason
    '/our-story': { name: 'A Journey of Love', url: '/music/a5.mp3' }, // Story
    '/games': { name: 'm1', url: '/music/m1.mp3' }, // Games
  };

  const getCurrentTrack = () => {
    return musicTracks[location.pathname as keyof typeof musicTracks] || musicTracks['/'];
  };

  useEffect(() => {
    const currentTrack = getCurrentTrack();
    if (audioRef.current) {
      audioRef.current.src = currentTrack.url; 
      audioRef.current.volume = volume; 
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.log('Audio playback failed', error);
      });
    }
  }, [location.pathname]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume; // Update volume when it changes
    }
  }, [volume]);

  useEffect(() => {
    const handleEnded = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0; // Reset to the start
        audioRef.current.play(); // Restart the audio
      }
    };

    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener('ended', handleEnded);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('ended', handleEnded);
      }
    };
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const currentTrack = getCurrentTrack();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-pink-200/50 min-w-[280px]"
      >
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
            <Music className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-800 truncate">
              {currentTrack.name}
            </p>
            <p className="text-xs text-gray-500 capitalize">
              {location.pathname === '/' ? 'Home' : location.pathname.slice(1).replace('-', ' ')}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlayPause}
            className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
          >
            {isPlaying ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </motion.button>

          <div className="flex-1 flex items-center space-x-2">
            <Volume2 className="w-3 h-3 text-gray-400" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="flex-1 h-1 bg-pink-200 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #ec4899 0%, #ec4899 ${volume * 100}%, #fce7f3 ${volume * 100}%, #fce7f3 100%)`
              }}
            />
          </div>
        </div>

        {isPlaying && (
          <div className="flex items-center justify-center space-x-1 mt-3">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="w-1 bg-gradient-to-t from-pink-500 to-purple-600 rounded-full"
                animate={{
                  height: [4, 16, 4],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        )}

        <p className="text-xs text-gray-400 text-center mt-2">
          🎵 Romantic music for each page
        </p>
      </motion.div>
    </div>
  );
};

export default BackgroundMusic;
