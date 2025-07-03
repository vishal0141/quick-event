import React from 'react';

const partners = [
  { name: 'SBI', logo: '/images/sbi.png' },
  { name: 'PVR', logo: '/images/pvr.png' },
  { name: 'BMW', logo: '/images/BMW.png' },
  { name: 'ICICI', logo: '/images/icic.png' },
  { name: 'Hyundai', logo: '/images/hyundai.png' },
  { name: 'Mahindra', logo: '/images/mahindra.png' },
];

const ContinuousSlider = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-10 px-4 my-8 sm:my-12 lg:my-20">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 italic">
        Our Network Trusted By
      </h2>

      {/* Slider container */}
      <div className="w-full max-w-[1280px] h-14 sm:h-16 lg:h-20  rounded-lg overflow-hidden relative">
        <div className="flex animate-scroll-right-to-left h-full items-center">
          {Array.from({ length: 4 }).map((_, setIndex) => (
            <div
              key={setIndex}
              className="flex items-center px-4 space-x-4 sm:space-x-6 lg:space-x-8"
            >
              {partners.map((partner, index) => (
                <div
                  key={`set-${setIndex}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-full px-3 sm:px-4 lg:px-5 rounded transition-transform hover:scale-105 min-w-max"
                >
                  <img
                    src={partner.logo}
                    className="h-8 sm:h-10 lg:h-12 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.querySelector('.fallback-text').style.display = 'flex';
                    }}
                  />
                  <div
                    className="fallback-text hidden items-center justify-center text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300"
                    role="img"
                    aria-label={`Logo of ${partner.name}`}
                  >
                    {partner.name}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContinuousSlider;
