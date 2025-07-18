import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Smile,
  Star,
  Eye,
  Sun,
  Moon,
  Music,
  Sparkles,
  HandHeart,
  Feather,
  Gift,
  Handshake,
  Leaf,
  Flame,
  Cloud,
 
  BookOpen,
  Flower2,
  Flashlight,
  ShieldCheck,
  Brain,
  Baby,
  Compass,
  Palette,
  Bell,
  Footprints,
  Gem
} from 'lucide-react';


const WhyILoveYou = () => {
  const reasons = [
    { icon: Heart, title: "Your Pure Heart", description: "Your heart is the purest I've ever known. You love without conditions, give without expecting, and care without limits.", color: "from-pink-400 to-rose-500" },
    { icon: Smile, title: "Your Beautiful Smile", description: "Your smile is my daily dose of sunshine. It has the power to turn my worst days into the best ones.", color: "from-yellow-400 to-orange-500" },
    { icon: Star, title: "Your Innocence", description: "In a world full of pretense, your genuine innocence is like a rare gem that I treasure more than anything.", color: "from-purple-400 to-pink-500" },
    { icon: Eye, title: "The Way You Look at Life", description: "You see beauty in the smallest things, find joy in simple moments, and approach life with wonder.", color: "from-blue-400 to-purple-500" },
    { icon: Sun, title: "How You Light Up My World", description: "Before you, my world was in shades of gray. You brought colors I never knew existed.", color: "from-orange-400 to-red-500" },
    { icon: Moon, title: "Your Gentle Nature", description: "You're gentle like moonlight — soft, calming, and beautiful in the most peaceful way.", color: "from-indigo-400 to-blue-500" },
    { icon: Music, title: "Your Laughter", description: "Your laughter is my favorite melody. It's pure, infectious, and fills my heart with joy every single time.", color: "from-teal-400 to-green-500" },
    { icon: Sparkles, title: "Your Uniqueness", description: "You're not like anyone else, and that's exactly what makes you perfect. Your quirks, your habits — they’re everything to me.", color: "from-emerald-400 to-teal-500" },
    { icon: HandHeart, title: "Your Kindness", description: "You treat everyone with a kind of softness this world forgets. Even when it’s hard, you choose love and grace.", color: "from-pink-500 to-red-400" },
    { icon: Feather, title: "Your Softness", description: "There’s a rare peace in your presence — like holding something fragile and sacred. You’re soft in the most beautiful way.", color: "from-blue-300 to-indigo-400" },
    { icon: Gift, title: "The Way You Give Love", description: "You love not just in words, but in gestures, in silence, in everyday magic. You love like it's your language.", color: "from-rose-300 to-pink-400" },
    { icon: Handshake, title: "How You Make People Feel Safe", description: "With you, the world slows down. Hearts feel lighter. You’re home to everyone who’s lucky enough to know you.", color: "from-teal-300 to-blue-400" },
    { icon: Leaf, title: "Your Pure Intentions", description: "Every thought, every decision, every act of yours comes from a place of sincerity. That’s rare. That’s you.", color: "from-green-400 to-lime-500" },
    { icon: Flame, title: "Your Inner Strength", description: "You carry storms in silence and still manage to be the sun for others. Your strength is quiet and extraordinary.", color: "from-orange-500 to-red-600" },
    { icon: Cloud, title: "Your Calmness in Chaos", description: "When everything feels like too much, your calm grounds me. You’re peace in human form.", color: "from-sky-400 to-cyan-500" },
    { icon: Leaf, title: "How You Care Without Limits", description: "You care so deeply, so endlessly. It's in your hugs, your eyes, your every little action. You love with your whole being.", color: "from-purple-300 to-fuchsia-400" },
    { icon: BookOpen, title: "Your Curious Mind", description: "You always want to understand — not just know. Your curiosity is honest and full of wonder, like a child exploring love.", color: "from-yellow-300 to-orange-400" },
    { icon: Gift, title: "The Words You Choose", description: "Your words feel like a soft blanket around the heart. You speak with such care, like every sentence wants to heal.", color: "from-red-300 to-rose-400" },
    { icon: Flower2, title: "Your Natural Grace", description: "You don’t try to be graceful — you just are. Every movement, every look, every silence — it all flows like poetry.", color: "from-lime-300 to-green-400" },
    { icon: Flashlight, title: "How You Bring Light to Others", description: "Even when you don’t realize it, you’re the light in someone’s darkness. Including mine. Always.", color: "from-yellow-400 to-amber-500" },
    { icon: ShieldCheck, title: "Your Loyalty", description: "You stay when it's hard, you believe when it's messy. Your loyalty isn't loud — it's just always there.", color: "from-indigo-500 to-violet-600" },
    { icon: Brain, title: "Your Thoughtfulness", description: "You remember things I say in passing, and you turn them into beautiful moments. That kind of love is rare.", color: "from-cyan-300 to-blue-400" },
    { icon: Baby, title: "Your Childlike Heart", description: "You still believe in magic, in love, in good people. That innocence — it’s my favorite part of you.", color: "from-pink-200 to-fuchsia-300" },
    { icon: Compass, title: "Your Sense of Purpose", description: "You walk this life with quiet purpose. Like your soul knows exactly why it’s here — to love, to heal, to stay kind.", color: "from-violet-300 to-purple-400" },
    { icon: Palette, title: "Your Creative Soul", description: "You don’t just see the world — you *feel* it. And then you turn it into something more beautiful every time.", color: "from-orange-300 to-pink-400" },
    { icon: Bell, title: "The Way You Listen", description: "You listen like it matters. Like you're holding someone’s heart in your hands. That’s how deep your love runs.", color: "from-blue-300 to-teal-400" },
    { icon: Footprints, title: "Your Humility", description: "You don’t try to stand out, and yet you do. Your humility makes everything about you shine even brighter.", color: "from-gray-400 to-slate-500" },
    { icon: Gem, title: "Your Rarity", description: "You’re not just different — you’re once-in-a-lifetime. And I know I’ll never find another soul like yours.", color: "from-fuchsia-500 to-pink-600" }
  ];

  const personalQualities = [
    "The way you scrunch your nose when you're thinking",
    "How you get excited about little things",
    "Your sleepy voice in the morning",
    "The way you care for everyone around you",
    "How you remember small details about people",
    "Your determination when you set your mind to something",
    "The way you make me feel like the luckiest person alive",
    "How you never give up on the people you love",
    "Your ability to find good in everyone",
    "The way you make ordinary moments feel magical"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4 pb-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-dancing text-gray-800 mb-4">
            Why I Love You, Kushu
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            There are countless reasons why I love you, but here are the ones that make my heart skip a beat every single day.
          </p>
        </motion.div>

        {/* Main Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-200/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${reason.color} text-white mb-4 shadow-lg`}>
                <reason.icon className="w-6 h-6" />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <Heart className="w-8 h-8 text-pink-400 fill-current" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Personal Qualities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-200/50 mb-12"
        >
          <h2 className="text-3xl font-dancing text-gray-800 mb-6 text-center">
            The Little Things That Make You Perfect
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {personalQualities.map((quality, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-pink-50/50 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                  <Heart className="w-3 h-3 text-white fill-current" />
                </div>
                <p className="text-gray-700 flex-1">{quality}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Special Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-center bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-pink-200/50"
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Heart className="w-16 h-16 text-pink-500 fill-current" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-pink-300 rounded-full"
              />
            </div>
          </div>
          
          <h3 className="text-2xl font-dancing text-gray-800 mb-4">
            But Most of All...
          </h3>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
            I love you because you're <span className="font-semibold text-pink-600">you</span>. 
            Not a perfect version of you, not a different version of you, but exactly the person you are right now. 
            Your flaws make you human, your strengths make you amazing, and your love makes me complete.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
            You taught me that love isn't about finding someone perfect - it's about finding someone whose imperfections 
            complement yours perfectly. And my sweet Kushu, you are my perfect complement in every way.
          </p>
          
          <blockquote className="text-xl font-dancing text-pink-600 italic">
            "I don't just love you for who you are, but for who I become when I'm with you."
          </blockquote>
          
          <p className="text-right text-gray-600 mt-4">— Your Appii, forever and always 💕</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhyILoveYou;