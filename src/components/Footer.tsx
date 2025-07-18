import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Sparkles, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const floatingHearts = Array.from({ length: 6 }, (_, i) => i);

  return (
    <footer className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 border-t border-pink-200/50 overflow-hidden">
      {/* Floating Hearts Background */}
      {floatingHearts.map((i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300/20"
          initial={{
            x: Math.random() * 100 + '%',
            y: '100%',
          }}
          animate={{
            y: '-20px',
            x: Math.random() * 100 + '%',
          }}
          transition={{
            duration: Math.random() * 8 + 12,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          <Heart className="w-8 h-8 fill-current" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Love Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 via-purple-600 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl tracking-wider">AK</span>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-pink-300/50 rounded-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-gray-800">
                  <span className="text-pink-600">Appii</span>
                  <span className="text-gray-400 mx-1">&</span>
                  <span className="text-purple-600">Kushu</span>
                </h3>
                <p className="text-sm text-gray-500">Forever & Always</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              "Every love story is beautiful, but ours is my favorite."
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-center space-x-2">
              <Sparkles className="w-5 h-5 text-pink-500" />
              <span>Our Journey</span>
            </h4>
            <div className="space-y-2">
              {[
                { name: 'Our Timeline', emoji: '📅' },
                { name: 'Sweet Memories', emoji: '📸' },
                { name: 'Love Letters', emoji: '💌' },
                { name: 'Why I Love You', emoji: '💖' },
                { name: 'Our Story', emoji: '📖' },
                { name: 'Love Games', emoji: '🎮' }
              ].map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  <span>{link.emoji}</span>
                  <span className="text-sm">{link.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Love Stats & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-center md:justify-end space-x-2">
              <Heart className="w-5 h-5 text-pink-500 fill-current" />
              <span>Love Stats</span>
            </h4>
            <div className="space-y-3">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-pink-200/50">
                <div className="text-2xl font-bold text-pink-600">
                  {Math.floor((new Date().getTime() - new Date('2023-03-24').getTime()) / (1000 * 60 * 60 * 24))}
                </div>
                <div className="text-xs text-gray-500">Days of Love</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-pink-200/50">
                <div className="text-2xl font-bold text-purple-600">∞</div>
                <div className="text-xs text-gray-500">Love Multiplier</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-pink-200/50">
                <div className="text-2xl font-bold text-rose-600">100%</div>
                <div className="text-xs text-gray-500">Happiness Level</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-pink-200"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 px-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-6 h-6 text-pink-400 fill-current" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-4"
          >
            <p className="text-gray-600 text-sm leading-relaxed">
              "Made with 💖 by Appii for his beloved Kushu"
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Every pixel crafted with love, every animation filled with emotion
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center space-x-4 text-xs text-gray-500"
          >
            <span>© {currentYear} Our Love Story</span>
            <span>•</span>
            <span>Forever & Always</span>
            <span>•</span>
            <span>AK ❤️</span>
          </motion.div>

          {/* Animated Hearts */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center space-x-2 mt-4"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              >
                <Heart className="w-4 h-4 text-pink-500 fill-current" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;