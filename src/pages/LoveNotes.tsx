import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X, Heart, Mail, Clock } from 'lucide-react';

const LoveLetters = () => {
  const [selectedLetter, setSelectedLetter] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const letters = [
    {
      title: 'When We First Met',
      date: 'August 15, 2022',
      preview: 'From the moment I first saw you, something inside me knew...',
      content: `My dearest,

From the moment I first saw you, something inside me knew. There was a certain magic in the air that day, wasn't there? The way you smiled, the sound of your laughter — it all felt like coming home to a place I'd never been before.

I remember thinking how remarkable it was that a complete stranger could feel so familiar. Like we had known each other in a thousand lifetimes before this one.

That day marked the beginning of the most beautiful journey of my life, and I'm grateful for every moment since.

Forever yours,
Your devoted heart ❤️`,
      color: 'from-pink-100 to-rose-100',
      accent: 'pink-500'
    },
    {
      title: 'What I Love About You',
      date: 'October 17, 2022',
      preview: 'There are countless reasons why my heart belongs to you...',
      content: `My beautiful soul,

There are countless reasons why my heart belongs to you, but let me try to capture just a few...

I love the way you laugh with your whole being, how you find joy in the smallest moments, and how you make everything around you brighter just by being there.

I love your kindness, your strength, your gentle spirit, and the way you see the world with such wonder and hope.

But most of all, I love how being with you feels like home.

All my love,
Your forever admirer 💕`,
      color: 'from-rose-100 to-pink-100',
      accent: 'rose-500'
    },



    {
      title: 'Our First Year Together',
      date: 'July 15',
      preview: 'One year. Twelve months. Fifty-two weeks...',
      content: `My beloved,

One year. Twelve months. Fifty-two weeks. Three hundred and sixty-five days. However you count it, it's been the best year of my life.

We've laughed until we cried. We've supported each other through challenges. We've built something beautiful together, one day at a time.

This is just the beginning of our story. There are so many more chapters waiting to be written, so many more memories waiting to be made.

I love you more today than yesterday, but less than tomorrow.

Forever and always,
Your partner in everything 💖`,
      color: 'from-pink-50 to-rose-50',
      accent: 'pink-600',
      special: true
    },


    {
      title: 'Dreams of Our Future',
      date: 'December 31, 2023',
      preview: 'When I close my eyes and imagine our future together...',
      content: `My darling,

When I close my eyes and imagine our future together, I see a lifetime of adventures, quiet mornings, shared dreams, and endless love.

I see us growing old together, still laughing at each other's jokes, still finding new things to discover about one another.

I see a love that only gets stronger with time, deeper with each passing season.

Whatever the future holds, I want to face it with you by my side.

With all my love and hope,
Your dreamer 🌟`,
      color: 'from-rose-50 to-pink-50',
      accent: 'rose-600'
    },

     {
      title: 'My Thoughts which will never be changed...(Till my last breath...)',
      date: '',
      preview: '',
      content: `Kashish ... 🌟`  ,
      color: 'from-rose-50 to-pink-50',
      accent: 'rose-600'
    }



  ];

  // Anniversary countdown (July 15, 2025)
  useEffect(() => {
    const targetDate = new Date('March 24, 2026 00:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-200 opacity-30"
            style={{
              fontSize: Math.random() * 15 + 8 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, Math.random() * 30 - 15, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          >
            💕
          </motion.div>
        ))}
      </div>

      {/* Decorative paper texture overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-transparent via-pink-200 to-transparent"></div>
      </div>

      {/* Header */}
      <div className="text-center pt-8 sm:pt-12 pb-6 sm:pb-8 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-pink-600 mb-3 sm:mb-4 relative"
            style={{ fontFamily: 'cursive' }}
          >
            Love Letters
            <motion.div
              className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400 fill-pink-400" />
            </motion.div>
          </h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Words from my heart to yours, saved forever
          </motion.p>
        </motion.div>
      </div>

      {/* Love Letters Craft Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {letters.map((letter, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
            >
              {/* Craft paper shadow */}
              <div className="absolute inset-0 bg-gray-300 rounded-2xl transform translate-x-1 translate-y-1 opacity-20"></div>
              <div className="absolute inset-0 bg-gray-200 rounded-2xl transform translate-x-0.5 translate-y-0.5 opacity-30"></div>
              
              {/* Main card */}
              <motion.div
                className={`relative bg-gradient-to-br ${letter.color} rounded-2xl shadow-xl p-4 sm:p-6 cursor-pointer border-2 border-white/50 backdrop-blur-sm overflow-hidden`}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedLetter(index)}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* Decorative corner elements */}
                <div className="absolute top-2 left-2 w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-t-2 border-pink-300 rounded-tl-lg"></div>
                <div className="absolute top-2 right-2 w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-t-2 border-pink-300 rounded-tr-lg"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-b-2 border-pink-300 rounded-bl-lg"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-b-2 border-pink-300 rounded-br-lg"></div>

                {/* Special heart for anniversary letter */}
                {letter.special && (
                  <motion.div
                    className="absolute top-3 right-3 sm:top-4 sm:right-4"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity 
                    }}
                  >
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 fill-pink-500" />
                  </motion.div>
                )}

                {/* Mail icon */}
                <motion.div
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/80 rounded-full mb-3 sm:mb-4 mx-auto shadow-lg"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className={`w-5 h-5 sm:w-6 sm:h-6 text-${letter.accent}`} />
                </motion.div>
                
                <motion.h3 
                  className={`text-lg sm:text-xl lg:text-2xl font-bold text-${letter.accent} mb-2 sm:mb-3 text-center leading-tight`}
                  style={{ fontFamily: 'cursive' }}
                >
                  {letter.title}
                </motion.h3>
                
                <div className="flex items-center justify-center text-gray-600 mb-3 sm:mb-4">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="text-xs sm:text-sm font-medium">{letter.date}</span>
                </div>
                
                <p className="text-gray-700 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed text-center px-2">
                  {letter.preview}
                </p>
                
                <motion.div 
                  className="text-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className={`text-${letter.accent} font-semibold text-sm sm:text-base inline-flex items-center`}>
                    Read letter 
                    <motion.span
                      className="ml-1 sm:ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.div>

                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(45deg, transparent, rgba(236, 72, 153, 0.1), transparent)`,
                    backgroundSize: '200% 200%'
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Anniversary Countdown Section */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Craft paper background */}
          <div className="absolute inset-0 bg-gray-300 rounded-3xl transform translate-x-2 translate-y-2 opacity-20"></div>
          <div className="absolute inset-0 bg-gray-200 rounded-3xl transform translate-x-1 translate-y-1 opacity-30"></div>
          
          <div className="relative bg-gradient-to-br from-white via-pink-50 to-rose-50 rounded-3xl shadow-2xl p-6 sm:p-8 border-2 border-white/50 backdrop-blur-sm">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-6 h-6 border-l-3 border-t-3 border-pink-300 rounded-tl-2xl"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-r-3 border-t-3 border-pink-300 rounded-tr-2xl"></div>
            
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 text-center mb-3 sm:mb-4" 
              style={{ fontFamily: 'cursive' }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Surprises for You
            </motion.h2>
            <p className="text-gray-600 text-center mb-6 sm:mb-8 text-sm sm:text-base">
              Special moments and messages waiting to be discovered
            </p>
            
            <div className="text-center mb-6 sm:mb-8">
              <motion.h3 
                className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-600 mb-4 sm:mb-6" 
                style={{ fontFamily: 'cursive' }}
                animate={{ 
                  textShadow: [
                    '0 0 10px rgba(236, 72, 153, 0.3)',
                    '0 0 20px rgba(236, 72, 153, 0.5)',
                    '0 0 10px rgba(236, 72, 153, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Countdown to Our Anniversary
              </motion.h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
                {[
                  { value: timeLeft.days, label: 'days', color: 'from-pink-100 to-rose-100' },
                  { value: timeLeft.hours, label: 'hours', color: 'from-rose-100 to-pink-100' },
                  { value: timeLeft.minutes, label: 'minutes', color: 'from-pink-50 to-rose-50' },
                  { value: timeLeft.seconds, label: 'seconds', color: 'from-rose-50 to-pink-50' }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="relative group"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Craft shadow */}
                    <div className="absolute inset-0 bg-gray-300 rounded-2xl transform translate-x-1 translate-y-1 opacity-20"></div>
                    
                    <motion.div
                      className={`relative bg-gradient-to-br ${item.color} rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-white/50 shadow-lg`}
                      whileHover={{ 
                        y: -3, 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      animate={{
                        y: [0, -2, 0],
                      }}
                      transition={{
                        duration: 2 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {/* Corner decorations */}
                      <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-pink-300 rounded-tl"></div>
                      <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-pink-300 rounded-tr"></div>
                      
                      <motion.div 
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 mb-1 sm:mb-2"
                        key={item.value}
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.value}
                      </motion.div>
                      <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">
                        {item.label}
                      </div>
                      
                      {/* Sparkle effect */}
                      <motion.div
                        className="absolute top-2 right-2 w-1 h-1 bg-pink-400 rounded-full"
                        animate={{ 
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="flex items-center justify-center mt-4 sm:mt-6 text-pink-600"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="font-semibold text-sm sm:text-base">July 15, 2025</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Letter Modal */}
      <AnimatePresence>
        {selectedLetter !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLetter(null)}
          >
            <motion.div
              className="relative max-w-2xl w-full max-h-[85vh] overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 50, rotateY: -15 }}
              animate={{ scale: 1, opacity: 1, y: 0, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50, rotateY: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Craft paper shadows */}
              <div className="absolute inset-0 bg-gray-400 rounded-3xl transform translate-x-3 translate-y-3 opacity-20"></div>
              <div className="absolute inset-0 bg-gray-300 rounded-3xl transform translate-x-2 translate-y-2 opacity-30"></div>
              <div className="absolute inset-0 bg-gray-200 rounded-3xl transform translate-x-1 translate-y-1 opacity-40"></div>
              
              <div className="relative bg-gradient-to-br from-white via-pink-50 to-rose-50 rounded-3xl shadow-2xl border-3 border-white/70 overflow-y-auto max-h-[85vh]">
                {/* Decorative header */}
                <div className="sticky top-0 bg-gradient-to-r from-pink-100 to-rose-100 p-4 sm:p-6 border-b-2 border-pink-200 rounded-t-3xl">
                  <motion.button
                    onClick={() => setSelectedLetter(null)}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-pink-500 hover:bg-pink-600 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                  
                  <motion.h2 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 mb-2 sm:mb-3 pr-12" 
                    style={{ fontFamily: 'cursive' }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {letters[selectedLetter].title}
                  </motion.h2>
                  <motion.div 
                    className="flex items-center text-gray-600"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm sm:text-base">{letters[selectedLetter].date}</span>
                  </motion.div>
                </div>
                
                {/* Letter content */}
                <div className="p-4 sm:p-6 md:p-8">
                  <motion.div
                    className="prose prose-sm sm:prose-base lg:prose-lg max-w-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-justify text-sm sm:text-base" style={{ fontFamily: 'Georgia, serif' }}>
                      {letters[selectedLetter].content}
                    </p>
                  </motion.div>
                  
                  {/* Animated hearts */}
                  <motion.div 
                    className="flex justify-center space-x-2 sm:space-x-3 mt-6 sm:mt-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="text-xl sm:text-2xl lg:text-3xl"
                        animate={{
                          y: [0, -8, 0],
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut"
                        }}
                      >
                        💖
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
                
                {/* Decorative border elements */}
                <div className="absolute top-4 left-4 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-t-2 border-pink-300 rounded-tl-lg"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-b-2 border-pink-300 rounded-br-lg"></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function App() {
  return <LoveLetters />;
}

export default App;