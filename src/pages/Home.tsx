import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4 flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-pink-400 rounded-full blur-xl opacity-50"
              style={{ width: '120px', height: '120px', margin: 'auto' }}
            />
            <div className="relative bg-white rounded-full p-6 shadow-2xl">
              <span className="text-6xl font-dancing bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                AK<span className="relative">
                  <Heart className="absolute -top-2 -right-2 w-6 h-6 text-pink-500 fill-current animate-pulse" />
                </span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Welcome Message */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-6 mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-dancing text-gray-800 leading-tight">
            Welcome to Our Love Story
          </h1>
          
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 font-light"
            >
              For my beautiful <span className="font-dancing text-2xl md:text-3xl text-pink-600">Kushu</span>
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
            >
              My sweetest <span className="text-pink-600 font-medium">Mahrani Ji</span>, 
              my adorable <span className="text-purple-600 font-medium">Penguinue</span>, 
              my precious <span className="text-pink-600 font-medium">fool sa balal</span> — 
              this is our journey of love, created with all my heart.
            </motion.p>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-200/50 mb-12"
        >
          <blockquote className="text-lg md:text-xl text-gray-700 font-light italic leading-relaxed">
            "In your smile, I found my paradise. You're my symbol of purity, Kushu."
          </blockquote>
          <p className="text-right text-pink-600 font-dancing text-xl mt-4">— Appii 💕</p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/timeline">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>Explore Our Journey</span>
            </motion.button>
          </Link>
          
          <Link to="/love-notes">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-pink-600 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-pink-200 hover:border-pink-300 flex items-center space-x-2"
            >
              <Heart className="w-5 h-5 fill-current" />
              <span>Read Love Notes</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 font-light">
            Made with 💖 for my Kushu by Appii
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;