import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Memories from './pages/Memories';
import LoveNotes from './pages/LoveNotes';
import WhyILoveYou from './pages/WhyILoveYou';
import OurStory from './pages/OurStory';
import GamesOfLove from './pages/GamesOfLove';
import FloatingElements from './components/FloatingElements';
import BackgroundMusic from './components/BackgroundMusic';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 relative overflow-hidden">
        <FloatingElements />
        <BackgroundMusic />
        <Navbar />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/love-notes" element={<LoveNotes />} />
            <Route path="/why-i-love-you" element={<WhyILoveYou />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/games" element={<GamesOfLove />} />
          </Routes>
        </AnimatePresence>

        <Footer />
      </div>
    </Router>
  );
}

export default App;