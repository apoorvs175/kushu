import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, Mail } from 'lucide-react';
import MessageModal from './MessageModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Timeline', path: '/timeline', icon: '📅' },
    { name: 'Memories', path: '/memories', icon: '📸' },
    { name: 'Letters', path: '/love-notes', icon: '💌' },
    { name: 'Reason', path: '/why-i-love-you', icon: '💖' },
    { name: 'Story', path: '/our-story', icon: '📖' },
    { name: 'Games', path: '/games', icon: '🎮' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-200/50 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Enhanced AK Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-600 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg tracking-wider">AK</span>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-pink-300/50 rounded-full"
                />
                <Heart className="absolute -top-1 -right-1 w-4 h-4 text-pink-500 fill-current animate-pulse" />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-serif text-gray-800">
                  <span className="text-pink-600">Appii</span>
                  <span className="text-gray-400 mx-1">&</span>
                  <span className="text-purple-600">Kushu</span>
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3 py-2 rounded-full transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-pink-600 bg-pink-100'
                      : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                  }`}
                >
                  <span className="flex items-center space-x-1">
                    <span>{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </span>
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-pink-100 rounded-full -z-10"
                    />
                  )}
                </Link>
              ))}
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowMessageModal(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
              >
                <Mail className="w-4 h-4" />
                <span>Message Appii</span>
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-pink-200/50"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-pink-600 bg-pink-100'
                        : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
                
                <button
                  onClick={() => {
                    setShowMessageModal(true);
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span>Message Appii</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <MessageModal 
        isOpen={showMessageModal} 
        onClose={() => setShowMessageModal(false)} 
      />
    </>
  );
};

export default Navbar;