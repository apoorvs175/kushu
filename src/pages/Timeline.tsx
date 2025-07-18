










import React, { useEffect, useState } from 'react'; 
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, Heart, MapPin, Camera, Gift, Star, MessageCircle, Coffee, Flower, Phone, Smile, Bike, Music, Book, Gamepad2 } from 'lucide-react';

const Timeline = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [touchedCard, setTouchedCard] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const springScrollProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);



const timelineEvents = [
  {
    date: 'March 25, 2024',
    title: 'When Our Story Started',
    description: 'The day we met felt like a soft beginning to something beautiful. Without knowing it, we had stepped into a love story that would change our lives.',
    icon: Heart,
    color: 'from-pink-400 to-rose-500',
    cardGradient: 'from-pink-400 via-pink-500 to-rose-500',
    image: '/image/i1.png'
  },
  {
    date: 'Holi 2024',
    title: 'I Started Seeing Her Differently',
    description: 'Colors were flying around us, but all I could see was her. That day, I stopped seeing her as just someone — and started dreaming of her as someone mine.',
    icon: MessageCircle,
    color: 'from-green-400 to-emerald-500',
    cardGradient: 'from-green-400 via-emerald-500 to-teal-500',
    image: '/image/i2.png'
  },
  {
    date: 'May 18, 2024',
    title: 'The First Hello',
    description: 'A small Instagram message started everything. That "hi" was simple, but it carried the first spark of something deep and real.',
    icon: Star,
    color: 'from-orange-400 to-red-500',
    cardGradient: 'from-orange-400 via-red-500 to-pink-500',
    image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    date: 'July 31, 2024',
    title: 'Our Conversations Began',
    description: 'We started talking on WhatsApp, and slowly, her messages became the best part of my day. Every reply felt like a step closer to her heart.',
    icon: MapPin,
    color: 'from-blue-400 to-indigo-500',
    cardGradient: 'from-blue-400 via-indigo-500 to-purple-500',
    image: '/image/i6.png'
  },
  {
    date: 'August 5, 2024',
    title: 'She\'s Not Easy - But Worth It',
    description: 'She said she was as tough as UPSC, and I believed her. But instead of giving up, I knew she was worth every challenge my heart could face.',
    icon: Gift,
    color: 'from-purple-400 to-pink-500',
    cardGradient: 'from-purple-400 via-pink-500 to-rose-500',
    image: '/image/i5.png'
  },
  {
    date: 'August 20, 2024',
    title: 'Am I Good Enough for Her?',
    description: 'That day, I looked at myself deeply and asked — can I be someone who makes her feel loved, safe, and proud? I wanted to grow for her.',
    icon: Star,
    color: 'from-yellow-400 to-orange-500',
    cardGradient: 'from-yellow-400 via-orange-500 to-red-500',
    image: '/image/i7.png'
  },
  {
    date: 'August 29, 2024',
    title: 'She Picked My Clothes',
    description: 'We went shopping and she chose things for me with such care. It made me feel seen, understood, and loved in the smallest ways.',
    icon: Camera,
    color: 'from-green-400 to-teal-500',
    cardGradient: 'from-green-400 via-teal-500 to-cyan-500',
    image: '/image/i4.png'
  },
  {
    date: 'September 4, 2024',
    title: 'The Night I Named Her "Kushu"',
    description: 'At 3 AM, the world was asleep, but my heart was awake. The name "Kushu" came from somewhere deep inside — it felt just right for her.',
    icon: Camera,
    color: 'from-indigo-400 to-blue-500',
    cardGradient: 'from-indigo-400 via-blue-500 to-cyan-500',
    image: '/image/i8.png'
  },
  {
    date: 'October 10, 2024',
    title: 'She Surprised Me',
    description: 'Watching her try rifle shooting showed me a side of her I hadn\'t seen — strong, brave, and full of confidence. I fell even deeper.',
    icon: Gift,
    color: 'from-purple-400 to-pink-500',
    cardGradient: 'from-purple-400 via-pink-500 to-rose-500',
    image: '/image/i9.png'
  },
  {
    date: 'October 11, 2024',
    title: 'Watching Her More Than the Movie',
    description: 'We sat in the theater, but I couldn\'t focus on the screen. Her laugh, her eyes — they were my favorite part of the whole show.',
    icon: Star,
    color: 'from-yellow-400 to-orange-500',
    cardGradient: 'from-yellow-400 via-orange-500 to-red-500',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    date: 'October 15, 2024',
    title: 'She Opened Her Heart',
    description: 'She sent me long, emotional messages that I read over and over. Her words touched places in me that I didn\'t even know needed healing.',
    icon: MessageCircle,
    color: 'from-pink-400 to-purple-500',
    cardGradient: 'from-pink-400 via-purple-500 to-indigo-500',
    image: '/image/i10.png'
  },
  {
    date: 'November 10, 2024',
    title: 'She Lit Up My Festival',
    description: 'Her Diwali photo felt brighter than all the fireworks. That one picture made my entire celebration feel complete.',
    icon: Star,
    color: 'from-yellow-400 to-orange-500',
    cardGradient: 'from-yellow-400 via-orange-500 to-red-500',
    image: '/image/i12.png'
  },
  {
    date: 'February 22, 2025',
    title: 'The Most Special Day',
    description: 'Her birthday felt like a gift to me too. I was just grateful she was born — and that somehow, her life crossed paths with mine.',
    icon: Gift,
    color: 'from-pink-400 to-rose-500',
    cardGradient: 'from-pink-400 via-rose-500 to-red-500',
    image: '/image/i11.png'
  },
  {
    date: 'May 1, 2025',
    title: 'She Was On My Hand and In My Heart',
    description: 'I wrote her name on my hand, but it was more than that. It was a silent promise that she lives inside everything I do and feel.',
    icon: Heart,
    color: 'from-red-400 to-pink-500',
    cardGradient: 'from-red-400 via-pink-500 to-rose-500',
    image: '/image/i13.png'
  },
  {
    date: 'May 18, 2025',
    title: 'One Ride, A Thousand Smiles',
    description: 'I helped her ride a bike, and every little laugh, every nervous look made my heart melt. That ride became a memory I\'d hold forever.',
    icon: Bike,
    color: 'from-emerald-400 to-green-500',
    cardGradient: 'from-emerald-400 via-green-500 to-teal-500',
    image: '/image/i17.png'
  },
  {
    date: 'May 19, 2025',
    title: 'She Was Far, But Felt Close',
    description: 'She went away for 56 days, and even though the distance hurt, my love for her kept growing stronger every single day.',
    icon: Heart,
    color: 'from-pink-500 to-rose-600',
    cardGradient: 'from-pink-500 via-rose-600 to-red-600',
    image: '/image/i14.png'
  },
  {
    date: 'May 19, 2025',
    title: 'The Moment Her Eyes Spoke',
    description: 'That hug and kiss before she left said more than words ever could. It was soft, shy, and full of quiet feelings.',
    icon: Heart,
    color: 'from-red-400 to-pink-500',
    cardGradient: 'from-red-400 via-pink-500 to-rose-500',
    image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    date: 'June 13, 2025',
    title: 'A Gift Full of Feelings',
    description: 'She gave me flowers — and somehow, they felt like pieces of her heart. I\'ve never received anything so simple, yet so meaningful.',
    icon: Flower,
    color: 'from-green-400 to-emerald-500',
    cardGradient: 'from-green-400 via-emerald-500 to-teal-500',
    image: '/image/i15.png'
  },
    {
    date: '15 July, 2025',
    title: 'An official Dinner but unexpected thing happened, A Lot of Love',
    description: 'The first time I asked her out on a date, her response was beyond words. She got down on her knees, said a few of the most beautiful words, and cried — and in that moment, it felt like God had truly blessed me by bringing her into my life.',
       icon: Gamepad2,
    color: 'from-rose-400 to-pink-500',
    cardGradient: 'from-rose-400 via-pink-500 to-red-500',
    image: '/image/ak02.png'
  },
  {
    date: 'Our First Argument',
    title: 'The Day We Fought and Understood',
    description: 'We fought, and it stung. But after the silence, we found each other again — stronger, more open, and ready to grow.',
    icon: Heart,
    color: 'from-red-400 to-pink-500',
    cardGradient: 'from-red-400 via-pink-500 to-rose-500',
    image: '/image/i16.png'
  },
  {
    date: 'Our First Meeting in Person',
    title: 'From Screen to Real Life',
    description: 'Seeing her in real life felt unreal. She smiled, I smiled back — and everything around us disappeared.',
    icon: Camera,
    color: 'from-green-400 to-teal-500',
    cardGradient: 'from-green-400 via-teal-500 to-cyan-500',
    image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    date: 'The Day I Let My Tears Fall',
    title: 'She Saw the Real Me',
    description: 'I cried in front of her, not knowing what she\'d do. But she stayed, held space for me, and proved that love means being there in the hard moments too.',
    icon: Heart,
    color: 'from-blue-400 to-indigo-500',
    cardGradient: 'from-blue-400 via-indigo-500 to-purple-500',
    image: '/image/i18.png'
  },
  {
    date: 'The Day I Spoke My Heart',
    title: 'I Told Her Everything',
    description: 'I finally shared everything I felt. She didn\'t run away — instead, she looked at me with a calm that made me feel safe and seen.',
    icon: Heart,
    color: 'from-red-500 to-pink-600',
    cardGradient: 'from-red-500 via-pink-600 to-rose-600',
    image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    date: 'The Iced Tea Scene',
    title: 'She Threw, I Laughed',
    description: 'She playfully threw a cup of iced tea at me. I was shocked — then we both laughed so hard. It\'s one of my favorite silly memories.',
    icon: Coffee,
    color: 'from-amber-400 to-orange-500',
    cardGradient: 'from-amber-400 via-orange-500 to-red-500',
    image: 'https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    date: 'Our Late Night Phone Calls',
    title: 'Talking Until Dawn',
    description: 'We talked for hours, about everything and nothing. When the sky turned light, I realized I could never get tired of hearing her voice.',
    icon: Phone,
    color: 'from-violet-400 to-purple-500',
    cardGradient: 'from-violet-400 via-purple-500 to-indigo-500',
    image: '/image/i19.png'
  },
  {
    date: 'One of Her Jokes',
    title: 'She Makes Me Laugh Without Trying',
    description: 'She tells jokes that don\'t always make sense — but somehow, they make me laugh every time. Her laughter is the best sound I know.',
    icon: Smile,
    color: 'from-cyan-400 to-blue-500',
    cardGradient: 'from-cyan-400 via-blue-500 to-indigo-500',
    image: '/image/i20.png'
  },
  {
    date: 'When We Found Our Song',
    title: 'That Tune Feels Like Us',
    description: 'We heard a song and just looked at each other. It became ours. Now, every time it plays, it feels like she\'s right beside me.',
    icon: Music,
    color: 'from-rose-400 to-pink-500',
    cardGradient: 'from-rose-400 via-pink-500 to-red-500',
    image: '/image/i21.png'
  },
  {
    date: 'Reading Together',
    title: 'Stories, and Our Story',
    description: 'We sat together, reading books and laughing at silly lines. Between the pages, we were quietly writing a love story of our own.',
    icon: Book,
    color: 'from-emerald-400 to-teal-500',
    cardGradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    image: '/image/i22.png'
  }
];

  const loveQuotes = [
    "In your smile, I found my home, in your heart, I found my love, Kushu.",
    "Every heartbeat whispers your name, every breath carries my love for you, my sweet Kushu Penguin.",
    "You are my today and all of my tomorrows, my precious Phoolsabalak.",
    "With you, every moment becomes a beautiful memory to treasure forever.",
    "Your smile is the key that unlocks my heart every single day, Kushu.",
    "In a world full of chaos, you are my peace and serenity, my love.",
    "Every sunrise reminds me how blessed I am to have you in my life, Kashish.",
    "You are not just my love, you are my best friend and soulmate, Kushu Penguin."
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 182, 193, 0.3) 0%, transparent 50%),
          linear-gradient(135deg, #fdf2f8 0%, #fce7f3 25%, #f3e8ff 50%, #ede9fe 75%, #fdf2f8 100%)
        `
      }}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Hearts */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-pink-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 12}px`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          >
            ♥
          </motion.div>
        ))}

        {/* Magical Sparkles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.2, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full blur-sm"></div>
          </motion.div>
        ))}
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 origin-left z-50 shadow-lg"
        style={{ scaleX: springScrollProgress }}
      />

      <div className="relative z-10 px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
        {/* Beautiful Header */}
        <motion.div
          initial={{ y: -80, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
          className="text-center mb-16 sm:mb-20 md:mb-24 lg:mb-28"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent mb-8 sm:mb-10 md:mb-12"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            Our Love Story
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: -45 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ delay: 0.6, duration: 1, type: "spring" }}
            className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl md:rounded-4xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl border border-pink-200/50 max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto relative overflow-hidden"
          >
            <div className="relative z-10">
              <motion.p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 sm:mb-8"
                animate={{
                  color: ["#374151", "#6b7280", "#374151"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                For my most precious Kushu Penguin Mera Phoolsabalak - every moment with you is a treasure, Kashish. Here's our beautiful journey together.
              </motion.p>
              
              <div className="flex justify-center space-x-3 sm:space-x-4 md:space-x-5">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 1.4, 1],
                      rotate: [0, 12, -12, 0],
                      y: [0, -15, 0]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2.5, 
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  >
                    <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-pink-500 fill-current drop-shadow-lg" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Timeline Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Black Road Timeline */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 bg-gray-900 rounded-lg shadow-2xl border-2 border-gray-700"
            style={{ 
              height: '100%',
              width: '15px' // Reduced from 40px (6 sm:w-8 md:w-10) to 15px
            }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            {/* Yellow Road Lines */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-yellow-400 rounded-full"
              style={{ height: '100%' }}
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Road Dashed Lines */}
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-3 bg-yellow-400 rounded-full left-1/2 transform -translate-x-1/2"
                style={{ top: `${i * 3.33}%` }}
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.05,
                }}
              />
            ))}
          </motion.div>

          {/* Floating Love Quotes */}
          {loveQuotes.map((quote, index) => (
            <motion.div
              key={`quote-${index}`}
              initial={{ opacity: 0, scale: 0, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                delay: index * 2 + 1, 
                duration: 1,
                type: "spring",
                stiffness: 80
              }}
              className="absolute z-5 hidden lg:block pointer-events-none"
              style={{
                left: `${[82, 18, 85, 15, 88, 12, 90, 10][index]}%`,
                top: `${[5, 15, 25, 35, 45, 55, 65, 75][index]}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <motion.div 
                className="bg-white/98 backdrop-blur-xl rounded-xl p-4 shadow-xl border border-pink-200/60 max-w-sm relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02, 
                  rotate: [0, 1, -1, 0],
                  transition: { duration: 0.1 }
                }}
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 0.5, -0.5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: index * 0.4,
                  ease: "easeInOut"
                }}
              >
                <p className="text-sm text-gray-700 italic text-center leading-relaxed relative z-10">
                  "{quote}"
                </p>
                
                <motion.div
                  className="absolute top-2 right-2"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  <Heart className="w-3 h-3 text-pink-400 fill-current opacity-60" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}

          {/* Timeline Events */}
          <div className="space-y-20 sm:space-y-24 md:space-y-28 lg:space-y-32">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  y: 80,
                  scale: 0.8,
                  rotate: index % 2 === 0 ? -20 : 20
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  rotate: 0
                }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                {/* Floating Icon */}
                <div className={`absolute ${index % 2 === 0 ? 'left-8 sm:left-12 md:left-16' : 'right-8 sm:right-12 md:right-16'} top-0 z-30`}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.1 }
                    }}
                    whileTap={{
                      scale: 0.95,
                      transition: { duration: 0.1 }
                    }}
                    whileInView={{
                      scale: [0, 1.1, 1],
                      rotate: [0, 180, 360],
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                      duration: 1.2,
                      type: "spring"
                    }}
                    className={`relative w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full bg-gradient-to-br ${event.color} shadow-2xl flex items-center justify-center border-4 border-white cursor-pointer`}
                  >
                    <event.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white drop-shadow-lg" />
                    
                    {/* Enhanced Pulse Effects */}
                    <motion.div 
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${event.color} opacity-40`}
                      animate={{
                        scale: [1, 2.2, 1],
                        opacity: [0.4, 0, 0.4],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                  </motion.div>
                </div>

                {/* Modern Gradient Card - Reduced size by 25px */}
                <motion.div
                  whileHover={{ 
                    scale: 1.05, 
                    y: -8,
                    transition: { duration: 0.1 }
                  }}
                  whileTap={{
                    scale: 0.98,
                    transition: { duration: 0.1 }
                  }}
                  onClick={() => setTouchedCard(touchedCard === index ? null : index)}
                  whileInView={{
                    rotateY: [index % 2 === 0 ? -45 : 45, 0],
                    opacity: [0, 1],
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1 + 0.2,
                    duration: 0.8,
                    type: "spring"
                  }}
                  className={`w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg ${index % 2 === 0 ? 'mr-auto ml-16 sm:ml-20 md:ml-22' : 'ml-auto mr-16 sm:mr-20 md:mr-22'} bg-gradient-to-br ${event.cardGradient} rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 shadow-2xl relative overflow-hidden group cursor-pointer`}
                >
                  {/* Touch Animation Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-white/20 opacity-0"
                    animate={{
                      opacity: touchedCard === index ? [0, 0.3, 0.1] : 0,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Date Badge */}
                    <motion.div 
                      whileHover={{ 
                        scale: 1.05, 
                        transition: { duration: 0.1 }
                      }}
                      className="inline-flex items-center space-x-2 px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-bold text-white bg-white/20 backdrop-blur-sm mb-3 sm:mb-4 md:mb-5 shadow-lg"
                    >
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      <span>{event.date}</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3 
                      className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-5 leading-tight drop-shadow-lg"
                      animate={{
                        scale: touchedCard === index ? [1, 1.02, 1] : 1,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: touchedCard === index ? Infinity : 0,
                      }}
                    >
                      {event.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                      className="text-white/90 leading-relaxed mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base md:text-lg drop-shadow-sm"
                      initial={{ opacity: 1 }}
                      animate={{
                        scale: touchedCard === index ? [1, 1.01, 1] : 1,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: touchedCard === index ? Infinity : 0,
                      }}
                    >
                      {event.description}
                    </motion.p>

                    {/* Enhanced Image Container - Reduced height */}
                    <motion.div
                      className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl relative group/image"
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.1 }
                      }}
                      animate={{
                        scale: touchedCard === index ? [1, 1.02, 1] : 1,
                      }}
                      transition={{
                        duration: 2,
                        repeat: touchedCard === index ? Infinity : 0,
                      }}
                    >
                      <motion.img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-32 sm:h-36 md:h-44 lg:h-52 object-cover"
                        whileHover={{
                          scale: 1.03,
                          transition: { duration: 0.1 }
                        }}
                        loading="lazy"
                      />
                      
                      {/* Touch Effect Overlay */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-0"
                        animate={{
                          opacity: touchedCard === index ? [0, 0.6, 0.2] : 0,
                        }}
                        transition={{
                          duration: 1,
                          repeat: touchedCard === index ? Infinity : 0,
                        }}
                      />
                      
                      {/* Floating Hearts on Touch */}
                      {touchedCard === index && (
                        <div className="absolute inset-0 pointer-events-none">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute"
                              style={{
                                left: `${20 + i * 15}%`,
                                top: `${30 + (i % 2) * 40}%`,
                              }}
                              initial={{ opacity: 0, scale: 0, y: 0 }}
                              animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 1.2, 0],
                                y: [0, -50, -100],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3,
                              }}
                            >
                              <Heart className="w-4 h-4 text-white fill-current" />
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Corner Heart */}
                  <motion.div
                    className="absolute top-3 right-3"
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, 10, -10, 0],
                      scale: touchedCard === index ? [1, 1.5, 1] : [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: touchedCard === index ? 2 : 4, 
                      repeat: Infinity,
                      delay: index * 0.6
                    }}
                  >
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/80 fill-current drop-shadow-lg" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Beautiful Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8, rotateX: -45 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.2, type: "spring", stiffness: 80 }}
          className="text-center mt-24 sm:mt-32 md:mt-40 lg:mt-48 relative z-10 max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto"
        >
          <motion.div
            className="bg-white/98 backdrop-blur-xl rounded-2xl sm:rounded-3xl md:rounded-4xl p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 shadow-2xl border-2 border-white/90 relative overflow-hidden group"
            whileHover={{
              scale: 1.01,
              y: -5,
              transition: { duration: 0.1 }
            }}
          >
            <div className="relative z-10">
              <motion.h3 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent mb-6 sm:mb-8 md:mb-10 lg:mb-12"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  scale: [1, 1.01, 1],
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                Forever and Always
              </motion.h3>
              
              <motion.p 
                className="text-gray-700 leading-relaxed mb-8 sm:mb-10 md:mb-12 lg:mb-14 text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto"
                animate={{
                  color: ["#374151", "#6b7280", "#374151"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Every moment with you is a blessing, Kushu. You are my heart, my soul, and my everything.
              </motion.p>
              
              {/* Grand Heart Animation */}
              <div className="flex justify-center space-x-4 sm:space-x-5 md:space-x-6 lg:space-x-8 mb-8 sm:mb-10 md:mb-12">
                {[...Array(7)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 1.6, 1],
                      rotate: [0, 20, -20, 0],
                      y: [0, -20, 0]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3.5, 
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  >
                    <Heart className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-pink-500 fill-current drop-shadow-2xl" />
                  </motion.div>
                ))}
              </div>
              
              {/* Final Message */}
              <motion.div
                className="p-6 sm:p-7 md:p-8 lg:p-10 bg-gradient-to-br from-pink-50/95 to-purple-50/95 rounded-xl sm:rounded-2xl md:rounded-3xl border-2 border-pink-200/60 relative overflow-hidden"
                whileHover={{
                  scale: 1.01,
                  transition: { duration: 0.1 }
                }}
              >
                <motion.p 
                  className="text-pink-700 italic text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium relative z-10"
                  animate={{
                    color: ["#be185d", "#ec4899", "#be185d"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  "You are my most precious treasure, and I love you more than words can express, Kushu. ❤️"
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Timeline;
