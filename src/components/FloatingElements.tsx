import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const hearts = Array.from({ length: 8 }, (_, i) => i);
  const particles = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Floating Hearts */}
      {hearts.map((i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute text-pink-300/40"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
          }}
          animate={{
            y: -50,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          <span className="text-2xl">💖</span>
        </motion.div>
      ))}

      {/* Light Particles */}
      {particles.map((i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-pink-300/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 8 + 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-300/20 to-purple-300/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default FloatingElements;