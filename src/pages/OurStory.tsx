import React from 'react';
import { motion } from 'framer-motion';
import { Book, Heart, Star, MapPin } from 'lucide-react';

const OurStory = () => {
  const storyChapters = [
    {
      chapter: "Chapter 1",
      title: "The Beginning",
      date: "March 24, 2023",
      content: "It was a day like any other, until it wasn't. When I first saw you, Kushu, something shifted in my universe. You were just being yourself - genuine, innocent, beautiful - and I knew in that moment that my life was about to change forever. You didn't know it then, but you had already captured my heart with that first smile.",
      image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-pink-400 to-rose-500"
    },
    {
      chapter: "Chapter 2",
      title: "Getting to Know You",
      date: "Spring 2023",
      content: "Every conversation revealed another layer of your beautiful soul. Your laugh became my favorite sound, your thoughts became my daily wonder. I discovered that behind your innocent eyes was a depth of kindness I had never encountered before. You were teaching me what it meant to love someone purely, without reservation.",
      image: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-purple-400 to-pink-500"
    },
    {
      chapter: "Chapter 3",
      title: "The Nickname Born from Love",
      date: "September 4, 2024, 3 AM",
      content: "At 3 AM, when the world was sleeping, I was awake thinking about you. And suddenly, it came to me - 'Kushu'. It wasn't planned, it wasn't thought out, it just felt right. Like how you feel right in my life, like how you fit perfectly in my heart. From that moment, you weren't just a name to me, you were my Kushu.",
      image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-blue-400 to-purple-500"
    },
    {
      chapter: "Chapter 4",
      title: "First Adventures Together",
      date: "Fall 2024",
      content: "Our first movie, our first shopping trip, your first rifle shooting experience - each 'first' was a milestone in our story. I watched you try new things with such courage and excitement. You made every ordinary moment feel extraordinary just by being there, by being you.",
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-indigo-400 to-blue-500"
    },
    {
      chapter: "Chapter 5",
      title: "Your Messages That Touched My Soul",
      date: "October 15, 2024",
      content: "The day you sent me those long messages - I read them over and over again. Not just the words, but the love behind them, the thought you put into each sentence, the way you opened your heart to me. Those messages are treasures I keep close to my heart, reminders of how deeply you care.",
      image: "/image/m12.png",
      color: "from-teal-400 to-green-500"
    },
    {
      chapter: "Chapter 6",
      title: "The Day I Almost Lost You",
      date: "May 19, 2024",
      content: "When you went away for 56 days, I realized how much you had become part of my very existence. The distance taught me that love isn't just about happiness - it's about longing, missing, and appreciating. Every day without you made me love you more, if that was even possible.",
      image: "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-orange-400 to-red-500"
    },
    {
      chapter: "Chapter 7",
      title: "The Most Beautiful Moment",
      date: "July 15, 2025",
      content: "We went on our first official dinner, and somewhere between laughter and stolen glances, I finally asked her out — invited her to be something more, something real. And then… she gently sat on her knees, her eyes shimmering with tears. She wasn’t crying out of doubt, but because her heart finally felt seen. In that quiet, fragile moment, she let go of her fears and told me — without words — that I was enough for her. That she would be okay with me. That with me, she could finally breathe.",
      image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-rose-400 to-pink-500"
    },
    {
      chapter: "Chapter 8",
      title: "Our Story Continues",
      date: "Today and Forever",
      content: "This is not the end of our story, my love. This is just the beginning. Every day with you is a new page, every moment a new sentence in the most beautiful story ever written. I can't wait to see what the next chapters hold for us, but I know that as long as we're together, it will be extraordinary.And I make sure that as I'm looking in the picture I always be like that , not only in picture but in our realy life ... ",
      image: "/image/ak1.jpg",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4 pb-12"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Book className="w-10 h-10 text-pink-600" />
            <h1 className="text-4xl md:text-5xl font-dancing text-gray-800">
              Our Love Story
            </h1>
            <Book className="w-10 h-10 text-pink-600 scale-x-[-1]" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every love story is beautiful, but ours is my favorite. Here's how we wrote the most beautiful chapters of our lives together.
          </p>
        </motion.div>

        {/* Story Chapters */}
        <div className="space-y-16">
          {storyChapters.map((chapter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex-row items-center gap-8`}
            >
              {/* Image Side */}
              <div className="lg:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-2xl shadow-2xl"
                >
                  <img
                    src={chapter.image}
                    alt={chapter.title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium opacity-90">{chapter.date}</p>
                  </div>
                </motion.div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-200/50"
                >
                  {/* Chapter Header */}
                  <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${chapter.color} mb-4`}>
                    <Star className="w-4 h-4" />
                    <span>{chapter.chapter}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-dancing text-gray-800 mb-4">
                    {chapter.title}
                  </h3>

                  {/* Content */}
                  <p className="text-gray-600 leading-relaxed text-lg font-light">
                    {chapter.content}
                  </p>

                  {/* Decorative Element */}
                  <div className="flex justify-end mt-4">
                    <Heart className="w-6 h-6 text-pink-400 fill-current" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Epilogue */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="mt-20 text-center bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-12 shadow-lg border border-pink-200/50"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <Heart className="w-20 h-20 text-pink-500 fill-current" />
              <div className="absolute inset-0 border-4 border-pink-300 rounded-full animate-pulse" />
            </motion.div>
          </div>

          <h3 className="text-3xl font-dancing text-gray-800 mb-6">
            To Be Continued...
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
            Our story is far from over, my sweet Kushu. In fact, I believe the best chapters are yet to be written. 
            Every day I wake up excited to add new pages to our love story, to create new memories, to love you even more than I did yesterday.
          </p>

          <blockquote className="text-xl font-dancing text-pink-600 italic mb-6">
            "Once upon a time, I met you. And we lived happily ever after is just the beginning of our story."
          </blockquote>

          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <MapPin className="w-5 h-5" />
            <span>Written with love in the pages of my heart</span>
          </div>

          <p className="text-pink-600 font-dancing text-2xl mt-6">
            — Your Appii, the luckiest person in the world 💕
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurStory;