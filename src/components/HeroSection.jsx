import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full h-[350px] mb-6 text-center py-16 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32"
    >
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E3044] leading-tight">
        Smart Registration for Smarter Events <br className="hidden md:block" />
        Event Technology Needs
      </h1>

      {/* Subheading */}
      <p className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
        Ensure Flawless Events with Our Advanced Registration, Check-In, and Badging Technology
      </p>

      {/* 🔥 Animated Contact Button */}
      <button className="relative group mt-8 bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-emerald-600 hover:via-green-600 hover:to-green-500 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-semibold overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 active:scale-95">
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/50 to-emerald-400/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

        {/* Sparkles */}
        <div className="absolute top-1 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
        </div>
        <div className="absolute bottom-1 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
          <div className="w-1 h-1 bg-white rounded-full animate-ping"></div>
        </div>

        {/* Label */}
        <span className="relative group-hover:animate-pulse text-sm sm:text-base md:text-lg">
          Contact Us
        </span>

        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full opacity-0 group-active:opacity-100 bg-white/20 animate-ping"></div>
      </button>
    </motion.section>
  );
};

export default HeroSection;
