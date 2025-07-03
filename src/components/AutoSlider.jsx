import React, { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

const AutoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Using placeholder images for demo
  const cardImages = [
    '/images/slideimg-1.png',
    '/images/slideimg-2.png',
    '/images/slideimg-3.png',
    
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % cardImages.length);
      }, 4000);
      
      return () => clearInterval(interval);
    }
  }, [isPaused, cardImages.length]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex items-center justify-center p-2 sm:p-4 md:p-6 xl:px-[0px] px-[16px] max-w-[1150px] mx-auto rounded-[30px] ">
      <div 
        className="relative w-full max-w-7xl mx-auto"
        onMouseEnter={() => !isPaused && setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Main Slider Container */}
        <div className="relative  w-full h-48 xs:h-56 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden  ">
          
          {/* Pause/Play Button */}
          <button
            onClick={togglePause}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-6 md:right-7 z-20 
                       bg-green-600/90 backdrop-blur-md border border-white/30 text-white 
                       p-2 sm:p-2.5 md:p-3 rounded-full font-bold text-xs sm:text-sm 
                       hover:bg-green-700 hover:scale-105 active:scale-95
                       transition-all duration-300 shadow-lg group
                       flex items-center justify-center"
          >
            {/* Shimmer Effect */}
            <div className="absolute top-4 inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-full"></div>

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/50 to-emerald-400/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-full"></div>

            {/* Sparkles */}
            <div className="absolute -top-0.5 -right-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-yellow-300 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute -bottom-0.5 -left-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
              <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full animate-ping"></div>
            </div>

            {/* Icon */}
            <span className="relative group-hover:animate-pulse text-sm sm:text-base md:text-lg">
              {isPaused ? <Play className="w-3 h-3 sm:w-4 sm:h-4" /> : <Pause className="w-3 h-3 sm:w-4 sm:h-4" />}
            </span>

            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-full opacity-0 group-active:opacity-100 bg-white/20 animate-ping"></div>
          </button>

          {/* Cards Container */}
          <div 
            className="flex h-full transition-transform duration-700 ease-in-out "
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {cardImages.map((image, index) => (
              <div
                key={index}
                className="min-w-full h-full flex items-center justify-center relative "
              >
                {/* Background Image */}
                <img 
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="absolute inset-0 w-full h-full "
                  loading="lazy"
                />
                
                {/* Optional overlay for better text readability */}
                {/* <div className="absolute inset-0 bg-black/10"></div> */}
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 md:space-x-4 z-20">
            {cardImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-green-500 scale-125 shadow-lg shadow-white/50'
                    : 'bg-black/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-white/30 flex justify-center">
            <div 
              className="h-full bg-green-500 transition-all duration-100 ease-linear  "
              style={{ 
                width: isPaused ? '100%' : '0%',
                animation: !isPaused ? 'progress 4s linear infinite' : 'none'
              }}
            />
          </div>
        </div>

        {/* Navigation Arrows for larger screens */}
        <div className="hidden md:block">
          <button
            onClick={() => goToSlide(currentSlide === 0 ? cardImages.length - 1 : currentSlide - 1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 
                       bg-green-300 backdrop-blur-md text-white p-2 rounded-full 
                       hover:bg-green-500 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => goToSlide((currentSlide + 1) % cardImages.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 
                       bg-green-300 backdrop-blur-md text-white p-2 rounded-full 
                       hover:bg-green-500 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        /* Custom breakpoint for extra small screens */
        @media (max-width: 475px) {
          .xs\\:h-56 {
            height: 14rem;
          }
        }
        
        /* Touch-friendly interactions */
        @media (hover: none) {
          .hover\\:scale-105:hover {
            transform: scale(1);
          }
          .hover\\:bg-green-700:hover {
            background-color: rgb(21 128 61 / 0.9);
          }
        }
      `}</style>
    </div>
  );
};

export default AutoSlider;