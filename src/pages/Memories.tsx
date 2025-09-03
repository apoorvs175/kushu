


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, Lock, Sparkles, Star, Crown, Gem } from 'lucide-react';

const Memories = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showPrivate, setShowPrivate] = useState(false);
  const [password, setPassword] = useState('');

const privateMemories = [
    {
      id: 1,
      image: '/img/a1.jpg',
      title: 'Queen of Hearts',
      date: 'Cute',
      description: "The day that changed everything. It was a day like any other, until it wasn't.",
      color: 'from-rose-400 to-pink-600'
    },
    {
      id: 2,
      image: '/img/a2.JPG',
      title: 'Sweet Moment',
      date: 'Lovely',
      description: 'Our first movie together, sharing popcorn and stolen glances',
      color: 'from-purple-400 to-indigo-600'
    },
    
    {
      id: 4,
            image: '/img/a4.jpg',
      title: 'Morach Holi Celebration',
      date: 'Queen of Colors',
      description: 'Colors of our love painted across the sky',
      color: 'from-orange-400 to-red-600'
    },
    {
      id: 5,
      image: '/img/a5.jpg',
      title: 'Birthday Queen',
      date: 'Sweetheart',
      description: 'Your special day made my world brighter',
      color: 'from-yellow-400 to-orange-600'
    },
    {
      id: 6,
            image: '/img/a6.jpg',
      title: 'Adventurous Spirit',
      date: 'Lovely',
      description: 'Teaching you to ride, holding you close',
      color: 'from-cyan-400 to-blue-600'
    },
    {
      id: 8,
            image: '/img/a80.jpg',
      title: 'Honey Moments',
      date: 'Special Day',
      description: 'A moment that belongs only to us',
      special: true,
      color: 'from-violet-400 to-purple-600'
    }
    ,
    {
      id: 9,
         image: '/img/a9.jpg',
      title: 'Dreamy Sunset',
      date: 'Eternal Bliss',
      description: 'Watching the sunset together, hand in hand, feeling the warmth of our love.',
      special: true,
      color: 'from-yellow-400 to-orange-600'
    },
    {
      id: 10,
         image: '/img/a10.jpg',
      title: 'Whispered Secrets',
      date: ' Innocent',
      description: 'Sharing our dreams and secrets under the stars, feeling closer than ever.',
      special: true,
      color: 'from-blue-400 to-purple-600'
    },
    {
      id: 11,
         image: '/img/a11.jpg',
      title: 'Officail Dinner',
      date: 'Romantic & Memorable  Evening ',
      description: 'A surprise dinner filled with lpove and most unexpexted thing waht she did and first time in her life, no words for her.',
      special: true,
      color: 'from-red-400 to-pink-600'
    },
    {
      id: 12,
         image: '/img/a12.jpg',
      title: 'Stargazing Night',
      date: 'Cosmic Love',
      description: 'Lying on the grass, counting stars, and making wishes together.',
      special: true,
      color: 'from-indigo-400 to-blue-600'
    },
    
    {
      id: 15,
         image: '/img/a15.jpg',
      title: 'Sweet Surprise',
      date: 'Joyful Day',
      description: 'A surprise picnic in the park, filled with laughter and love.',
      special: true,
      color: 'from-green-400 to-yellow-600'
    },
    {
      id: 16,
         image: '/img/a16.jpg',
      title: 'Love Letters',
      date: 'Heartfelt Moments',
      description: 'Exchanging love letters, pouring our hearts out on paper.',
      special: true,
      color: 'from-purple-400 to-pink-600'
    },
    {
      id: 17,
         image: '/img/a17.jpg',
      title: 'Adventurous Hike',
      date: 'Nature Lovers',
      description: 'Exploring the great outdoors together, creating memories with every step.',
      special: true,
      color: 'from-teal-400 to-green-600'
    },
    {
      id: 18,
         image: '/img/a18.jpg',
      title: 'Sweet Goodnight',
      date: 'Tender Moments',
      description: 'A sweet goodnight kiss, sealing our love with warmth and affection.',
      special: true,
      color: 'from-pink-300 to-rose-400'
    },




    
    {
      id: 29,
      image: '/img/c3.jpg',
      title: 'Innocent Laughter',
      date: 'Joyful Spirit',
      description: 'Your laughter is like a melody that fills my heart with joy. It’s pure and untainted, a beautiful reminder of the innocence we cherish together.',
      special: true,
      color: 'from-yellow-400 to-orange-600'
    },
    {
      id: 30,
      image: '/img/c2.jpg',
      title: 'Gentle Heart',
      date: 'Tender Love',
      description: 'Your heart is as gentle as a spring breeze, bringing warmth and comfort to everyone around you. It’s a purity that captivates my soul.',
      special: true,
      color: 'from-pink-400 to-rose-600'
    },
    {
      id: 31,
      image: '/img/c1.jpg',
      title: 'Sweet Simplicity',
      date: 'Pure Joy',
      description: 'In your simplicity lies a profound beauty. The way you see the world with wonder and awe reminds me of the purity of love we share.',
      special: true,
      color: 'from-teal-400 to-blue-600'
    },



    
    {
      id: 19,
      image: '/img/n1.jpg',
      title: 'Ethereal Gaze',
      date: 'Pure Enchantment',
      description: 'Every time I look into your eyes, I see a universe of beauty and love. It’s as if the stars themselves conspired to create the magic that is you.',
      special: true,
      color: 'from-teal-400 to-blue-600'
    },
    {
      id: 20,
      image: '/img/n2.jpg',
      title: 'Radiant Smile',
      date: 'Heavenly Light',
      description: 'Your smile is my favorite sunrise, illuminating my darkest days and filling my heart with warmth. It’s a reminder of the pure love we share.',
      special: true,
      color: 'from-pink-400 to-rose-600'
    },
    {
      id: 21,
      image: '/img/n3.jpg',
      title: 'Captivating Eyes',
      date: 'Alluring Depths',
      description: 'There’s a depth in your eyes that pulls me in, a beautiful mystery that I long to explore. In those moments, I feel like the luckiest person alive.',
      special: true,
      color: 'from-purple-400 to-indigo-600'
    },
    {
      id: 22,
      image: '/img/n4.jpg',
      title: 'Beauty in Simplicity',
      date: 'Natural Charm',
      description: 'You possess a beauty that is effortlessly captivating. It’s in the way you laugh, the way you move, and the way you love. It’s simply enchanting.',
      special: true,
      color: 'from-yellow-400 to-orange-600'
    },
    {
      id: 23,
      image: '/img/n5.jpg',
      title: 'Dangerous Allure',
      date: 'Irresistible Charm',
      description: 'There’s a spark in your eyes that hints at adventure and excitement. It’s a beautiful danger that makes my heart race and my soul sing.',
      special: true,
      color: 'from-red-400 to-pink-600'
    },
    {
      id: 24,
      image: '/img/n6.jpg',
      title: 'Radiant Beauty',
      date: 'Heavenly Glow',
      description: 'Your beauty radiates from within, a light that brightens my life and fills my heart with joy. You are my sunshine on the cloudiest days.',
      special: true,
      color: 'from-emerald-400 to-teal-600'
    },
    {
      id: 25,
      image: '/img/n7.jpg',
      title: 'Eyes of a Goddess',
      date: 'Divine Connection',
      description: 'When I gaze into your eyes, I see the essence of beauty and grace. It’s as if I’m looking into the soul of a goddess, and I’m forever in awe.',
      special: true,
      color: 'from-violet-400 to-purple-600'
    },
    {
      id: 26,
      image: '/img/n8.jpg',
      title: 'Charming Innocence',
      date: 'Pure Heart',
      description: 'Your innocence is a breath of fresh air, a reminder of the beauty in simplicity. It’s a treasure I hold dear, and it makes me love you even more.',
      special: true,
      color: 'from-pink-300 to-rose-400'
    },
    {
      id: 27,
      image: '/img/n9.jpg',
      title: 'Spellbinding Beauty',
      date: 'Enchanting Moments',
      description: 'Every moment spent with you feels like a dream. Your beauty is spellbinding, and I find myself lost in the magic of your presence.',
      special: true,
      color: 'from-cyan-400 to-blue-600'
    },
    {
      id: 28,
      image: '/img/n10.jpg',
      title: 'Mystical Charm',
      date: 'Fascinating Love',
      description: 'There’s something mystical about you, a charm that draws me in and makes me want to know every part of your beautiful soul.',
      special: true,
      color: 'from-orange-400 to-red-600'
    },

  
    {
      id: 33,
      image: '/img/d2.png',
      title: 'My Queen',
      date: 'Regal Love',
      description: 'In my eyes, you are a queen, ruling my heart with grace and elegance. Your presence is a royal blessing that fills my life with joy.',
      special: true,
      color: 'from-rose-400 to-pink-600'
    },
    {
      id: 34,
      image: '/img/d3.png',
      title: 'Beauty of Paris',
      date: 'Romantic Escape',
      description: 'Your beauty reminds me of the enchanting streets of Paris, where every corner holds a story, and every moment feels like a dream come true.',
      special: true,
      color: 'from-blue-400 to-teal-600'
    },


    {
      id: 3,
            image: '/img/a3.jpg',
      title: 'Lovely  Day',
      date: 'Down to Earth',
      description: 'You bought me clothes and filled my heart with joy',
      color: 'from-emerald-400 to-teal-600'
    }
    ,
    {
      id: 7,
            image: '/img/a7.jpg',
      title: 'Fool Sa Balak',
      date: 'Janu',
      description: 'Our first kiss under the starlit sky',
      special: true,
      color: 'from-pink-400 to-rose-600'
    },
     {
      id: 14,
         image: '/img/a14.jpg',
      title: 'Rainy Day Cuddles',
      date: 'Cozy Love',
      description: 'Snuggled up together, listening to the rain, feeling safe in each other’s arms.',
      special: true,
      color: 'from-gray-400 to-blue-600'
    },
    {
      id: 13,
         image: '/img/a13.jpg',
      title: 'First Dance',
      date: 'Magical Moment',
      description: 'Our first dance together, swaying to the rhythm of our hearts.',
      special: true,
      color: 'from-pink-400 to-rose-600'
    },
    {
      id: 33,
         image: '/img/a001.jpg',
      title: 'Lovly Moments',
      date: 'Cozy Love',
      description: ' Best dream which get True day by day',
      special: true,
      color: 'from-gray-400 to-blue-600'
    },
   
    {
      id: 32,
      image: '/img/d1.jpg',
      title: 'Sweet Couple',
      date: 'Unbreakable Bond',
      description: 'Together, we create a beautiful harmony, a perfect couple navigating life hand in hand, sharing dreams and laughter.',
      special: true,
      color: 'from-purple-400 to-indigo-600'
    }

];

  const handlePrivateAccess = () => {
    if (password === 'Kushu0213') {
      setShowPrivate(true);
    } else {
      alert('Incorrect password! This section is only for Kushu 💕');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 via-purple-50 to-indigo-50 relative overflow-hidden">
      {/* Romantic Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300/60"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 50,
              opacity: 0.3,
              scale: Math.random() * 0.8 + 0.4
            }}
            animate={{
              y: -100,
              x: Math.random() * window.innerWidth,
              opacity: [0.3, 0.9, 0.3],
              rotate: [0, 360],
              scale: [0.4, 1.5, 0.4]
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          >
            <Heart className="w-5 h-5 fill-current" />
          </motion.div>
        ))}
      </div>

      {/* Romantic Sparkle Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute text-pink-400/70"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        ))}
      </div>

      {/* Love Stars */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute text-rose-300/60"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.8, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          >
            <Star className="w-4 h-4 fill-current" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative z-10 min-h-screen pt-8 sm:pt-12 md:pt-20 px-4 pb-12"
      >
        <div className="max-w-7xl mx-auto">
          {/* Ultra Romantic Header */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            className="text-center mb-8 sm:mb-16 relative"
          >
            {/* Romantic Aura */}
            <motion.div
              animate={{ 
                scale: [1, 1.15, 1],
                rotate: [0, 8, -8, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-pink-300/40 via-rose-300/40 to-purple-300/40 rounded-full blur-3xl"
            />
            
            <div className="flex items-center justify-center mb-6 relative z-10">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <Crown className="w-10 h-10 text-pink-500 mr-4" />
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ backgroundSize: "300% 300%" }}
              >
                💕 Our Love Story 💕
              </motion.h1>
              
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <Crown className="w-10 h-10 text-pink-500 ml-4" />
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="relative z-10"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4 font-medium">
                💖 Every moment is a love letter written in time, my darling Kushu 💖
              </p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-base sm:text-lg text-pink-600 mt-4 font-semibold"
              >
                Where every heartbeat echoes our eternal romance 💫💕
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Ultra Romantic Private Section */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mx-2 sm:mx-4"
          >
            {/* Love Container */}
            <div className="relative bg-gradient-to-br from-white/95 via-pink-50/90 to-rose-50/90 backdrop-blur-xl rounded-[2rem] p-6 sm:p-10 shadow-2xl border-3 border-pink-300/60 overflow-hidden">
              {/* Romantic Animated Border */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-400 via-rose-400 via-purple-400 to-pink-400 rounded-[2rem] opacity-80"
                animate={{ 
                  background: [
                    "linear-gradient(45deg, #f472b6, #fb7185, #a855f7, #f472b6)",
                    "linear-gradient(90deg, #fb7185, #a855f7, #f472b6, #fb7185)",
                    "linear-gradient(135deg, #a855f7, #f472b6, #fb7185, #a855f7)",
                    "linear-gradient(45deg, #f472b6, #fb7185, #a855f7, #f472b6)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="absolute inset-[4px] bg-gradient-to-br from-white/98 via-pink-50/95 to-rose-50/95 rounded-[2rem]" />
              
              {/* Floating Love Gems */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={`gem-${i}`}
                    className="absolute text-pink-400/70"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{ 
                      y: [0, -25, 0],
                      rotate: [0, 180, 360],
                      scale: [0.8, 1.4, 0.8],
                      opacity: [0.4, 0.9, 0.4]
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      delay: i * 0.25,
                      ease: "easeInOut"
                    }}
                  >
                    <Heart className="w-5 h-5 fill-current" />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center relative z-10"
              >
                <div className="flex items-center justify-center space-x-4 mb-8">
                  <motion.div
                    animate={{ 
                      rotate: [0, 20, -20, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    <Lock className="w-10 h-10 text-pink-600" />
                  </motion.div>
                  
                  <motion.h2 
                    className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent"
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    💕 Sacred Love Vault 💕
                  </motion.h2>
                  
                  <motion.div
                    animate={{ 
                      scale: [1, 1.4, 1],
                      rotate: [0, 360]
                    }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  >
                    <Heart className="w-10 h-10 text-pink-500 fill-current" />
                  </motion.div>
                </div>
                
                {!showPrivate ? (
                  <div className="max-w-lg mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="bg-gradient-to-r from-pink-100/90 to-rose-100/90 rounded-2xl p-6 mb-8 border-2 border-pink-300/50"
                    >
                      <p className="text-gray-700 text-lg leading-relaxed font-medium">
                        💖 This treasure chest holds our most precious love moments
                      </p>
                      <p className="text-pink-600 mt-2 font-semibold">
                        Only for my beloved Kushu's heart 💕✨
                      </p>
                    </motion.div>
                    
                    <div className="space-y-6">
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="relative"
                      >
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="💕 Enter the love password 💕"
                          className="w-full px-8 py-5 border-3 border-pink-400 rounded-2xl focus:ring-6 focus:ring-pink-500/40 focus:border-pink-500 transition-all duration-100 text-center bg-white/95 backdrop-blur-sm text-lg font-medium placeholder-pink-500"
                        />
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2"
                        >
                          <Heart className="w-6 h-6 text-pink-500 fill-current" />
                        </motion.div>
                      </motion.div>
                      
                      <motion.button
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        whileHover={{ 
                          scale: 1.05, 
                          boxShadow: "0 25px 50px rgba(236, 72, 153, 0.5)",
                          y: -3
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handlePrivateAccess}
                        className="w-full py-5 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 text-white rounded-2xl font-bold text-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-100 shadow-xl transform relative overflow-hidden"
                        style={{ backgroundSize: "300% 300%" }}
                      >
                        <motion.div
                          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                          transition={{ duration: 2.5, repeat: Infinity }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                        />
                        <span className="relative z-10">💖 Unlock Our Love Story 💖</span>
                      </motion.button>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {privateMemories.map((memory, index) => (
                      <motion.div
                        key={memory.id}
                        initial={{ opacity: 0, scale: 0.7, y: 100, rotateY: -30 }}
                        animate={{ opacity: 1, scale: 1, y: 0, rotateY: 0 }}
                        transition={{ 
                          delay: index * 0.15,
                          duration: 0.6,
                          type: "spring",
                          stiffness: 140
                        }}
                        whileHover={{ 
                          y: -25, 
                          scale: 1.08,
                          rotateY: 8,
                          boxShadow: "0 40px 80px rgba(236, 72, 153, 0.4)",
                          zIndex: 10
                        }}
                        className="group relative bg-gradient-to-br from-white/98 via-pink-50/90 to-rose-50/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border-3 border-pink-300/60 hover:shadow-3xl transition-all duration-100 cursor-pointer transform-gpu"
                        onClick={() => setSelectedImage(memory.image)}
                        style={{
                          transformStyle: 'preserve-3d',
                          perspective: '1000px'
                        }}
                      >
                        {/* Special Love Badge */}
                        {memory.special && (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: index * 0.15 + 0.4, type: "spring" }}
                            className="absolute top-4 left-4 z-20"
                          >
                            <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-full p-3 shadow-lg border-2 border-white/60">
                              <Crown className="w-6 h-6 text-white" />
                            </div>
                          </motion.div>
                        )}

                        {/* Romantic Border Animation */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${memory.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-100`}
                          animate={{ 
                            background: [
                              `linear-gradient(45deg, ${memory.color.split(' ')[1]}, ${memory.color.split(' ')[3]}, ${memory.color.split(' ')[1]})`,
                              `linear-gradient(90deg, ${memory.color.split(' ')[3]}, ${memory.color.split(' ')[1]}, ${memory.color.split(' ')[3]})`,
                              `linear-gradient(45deg, ${memory.color.split(' ')[1]}, ${memory.color.split(' ')[3]}, ${memory.color.split(' ')[1]})`
                            ]
                          }}
                          transition={{ duration: 2.5, repeat: Infinity }}
                        />
                        <div className="absolute inset-[4px] bg-gradient-to-br from-white/98 via-pink-50/95 to-rose-50/95 rounded-3xl" />
                        
                        {/* Floating Love Hearts */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100 overflow-hidden">
                          {[...Array(12)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute text-pink-500/70"
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                              }}
                              animate={{ 
                                scale: [0, 1.8, 0],
                                rotate: [0, 180, 360],
                                opacity: [0, 0.9, 0],
                                y: [0, -35, 0]
                              }}
                              transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeInOut"
                              }}
                            >
                              {i % 4 === 0 ? <Heart className="w-4 h-4 fill-current" /> : 
                               i % 4 === 1 ? <Sparkles className="w-4 h-4" /> : 
                               i % 4 === 2 ? <Star className="w-4 h-4 fill-current" /> :
                               <Gem className="w-4 h-4" />}
                            </motion.div>
                          ))}
                        </div>
                        
                        <div className="relative z-10 overflow-hidden rounded-t-3xl">
                          <div className="relative overflow-hidden">
                            <motion.img
                              src={memory.image}
                              alt={memory.title}
                              className="w-full h-56 sm:h-64 object-cover group-hover:scale-125 transition-transform duration-100 filter group-hover:brightness-110 group-hover:saturate-120"
                              whileHover={{ scale: 1.1 }}
                            />
                            
                            {/* Romantic Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-100`} />
                            
                            {/* Love Particles */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                              {[...Array(10)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute text-white/95"
                                  initial={{ 
                                    x: `${Math.random() * 100}%`,
                                    y: '100%',
                                    opacity: 0,
                                    scale: 0
                                  }}
                                  animate={{ 
                                    y: '-40%',
                                    opacity: [0, 1, 0],
                                    scale: [0, 1.5, 0],
                                    rotate: [0, 360]
                                  }}
                                  transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: i * 0.3,
                                    ease: "easeInOut"
                                  }}
                                >
                                  <Heart className="w-5 h-5 fill-current" />
                                </motion.div>
                              ))}
                            </div>
                            
                            {/* Romantic Date Badge */}
                            <motion.div 
                              initial={{ opacity: 0, x: -30 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="absolute bottom-4 left-4 text-white"
                            >
                              <div className={`bg-gradient-to-r ${memory.color} backdrop-blur-sm rounded-full px-5 py-3 border-2 border-white/40 shadow-lg`}>
                                <p className="text-sm font-bold tracking-wide">
                                  💕 {memory.date} 💕
                                </p>
                              </div>
                            </motion.div>

                            {/* Love Heart Icon */}
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                              className="absolute top-4 right-4 text-white/95"
                            >
                              <div className={`bg-gradient-to-br ${memory.color} backdrop-blur-sm rounded-full p-4 border-2 border-white/50 group-hover:scale-125 transition-transform duration-100 shadow-lg`}>
                                <Heart className="w-6 h-6 fill-current" />
                              </div>
                            </motion.div>
                          </div>
                        </div>
                        
                        <div className="relative z-10 p-6">
                          {/* Romantic Title */}
                          <motion.h3 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.4 }}
                            className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${memory.color} bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-100`}
                          >
                            💖 {memory.title} 💖
                          </motion.h3>
                          
                          {/* Love Description */}
                          <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                            className="text-gray-700 text-sm sm:text-base leading-relaxed line-clamp-3 group-hover:text-gray-800 transition-colors duration-100"
                          >
                            {memory.description}
                          </motion.p>
                          
                          {/* Romantic Bottom Border */}
                          <motion.div 
                            className={`absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r ${memory.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-100 origin-left rounded-b-3xl`}
                          />
                        </div>

                        {/* Corner Love Elements */}
                        <div className="absolute top-3 left-3 text-pink-400/70 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                          <Heart className="w-5 h-5 fill-current" />
                        </div>
                        <div className="absolute bottom-3 right-3 text-rose-400/70 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                          <Heart className="w-5 h-5 fill-current" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Romantic Image Modal */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)}
              >
                {/* Floating Love Hearts in Modal */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-pink-400/40"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{ 
                        scale: [0, 1.5, 0],
                        rotate: [0, 360],
                        opacity: [0, 0.8, 0]
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    >
                      <Heart className="w-8 h-8 fill-current" />
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ scale: 0.7, opacity: 0, y: 100, rotateX: -30 }}
                  animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ scale: 0.7, opacity: 0, y: 100, rotateX: -30 }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="relative max-w-5xl max-h-[90vh] bg-gradient-to-br from-white via-pink-50 to-rose-50 rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-300/60"
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.button
                    whileHover={{ 
                      scale: 1.2, 
                      backgroundColor: "rgba(236, 72, 153, 0.3)",
                      rotate: 90
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-6 right-6 z-10 p-4 bg-white/95 hover:bg-white rounded-full transition-all duration-100 shadow-xl border-2 border-pink-300/60"
                  >
                    <X className="w-6 h-6 text-gray-700" />
                  </motion.button>
                  <img
                    src={selectedImage}
                    alt="Memory"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Ultra Romantic Bottom Message */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center mt-12 relative mx-2 sm:mx-4"
          >
            <div className="bg-gradient-to-br from-white/95 via-pink-50/90 to-rose-50/90 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl border-3 border-pink-300/60 relative overflow-hidden">
              {/* Romantic Border */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-400 via-rose-400 via-purple-400 to-pink-400 rounded-3xl opacity-60"
                animate={{ 
                  background: [
                    "linear-gradient(45deg, #f472b6, #fb7185, #a855f7, #f472b6)",
                    "linear-gradient(90deg, #fb7185, #a855f7, #f472b6, #fb7185)",
                    "linear-gradient(135deg, #a855f7, #f472b6, #fb7185, #a855f7)",
                    "linear-gradient(45deg, #f472b6, #fb7185, #a855f7, #f472b6)"
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <div className="absolute inset-[4px] bg-gradient-to-br from-white/98 via-pink-50/95 to-rose-50/95 rounded-3xl" />

              {/* Floating Love Elements */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(18)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-pink-400/50"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{ 
                      y: [0, -25, 0],
                      rotate: [0, 360],
                      scale: [0.8, 1.5, 0.8],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  >
                    {i % 5 === 0 ? <Heart className="w-5 h-5 fill-current" /> : 
                     i % 5 === 1 ? <Sparkles className="w-5 h-5" /> : 
                     i % 5 === 2 ? <Star className="w-5 h-5 fill-current" /> :
                     i % 5 === 3 ? <Gem className="w-5 h-5" /> :
                     <Crown className="w-5 h-5" />}
                  </motion.div>
                ))}
              </div>

              <motion.div
                animate={{ 
                  rotate: [0, 12, -12, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{ 
                  duration: 3.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10 mb-6"
              >
                <div className="flex items-center justify-center space-x-6">
                  <Crown className="w-14 h-14 text-pink-500" />
                  <Heart className="w-20 h-20 text-rose-500 fill-current" />
                  <Crown className="w-14 h-14 text-pink-500" />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 }}
                className="relative z-10"
              >
                <p className="text-gray-700 leading-relaxed text-lg sm:text-xl md:text-2xl max-w-5xl mx-auto font-medium mb-6">
                  💕 "Every memory with you is a precious diamond in the crown of my heart. 
                  Each moment we share becomes a star in the constellation of our eternal love story." 💕
                </p>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-pink-600 font-bold text-2xl sm:text-3xl md:text-4xl mt-8"
                >
                  💖 Forever and always yours, my precious Kushu 💖
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.4 }}
                  className="text-rose-600 font-bold text-xl sm:text-2xl mt-4"
                >
                  💕 — Your devoted Appii 👑💕
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Memories;
