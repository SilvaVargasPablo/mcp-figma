import { useState } from 'react';
import { imgCar001, imgCar002, imgCar003, imgCar004 } from '../assets.js';

const slides = [
  {
    image: imgCar001,
    category: "01 / 04",
  },
  {
    image: imgCar002,
    category: "02 / 04",
  },
  {
    image: imgCar003,
    category: "03 / 04",
  },
  {
    image: imgCar004,
    category: "04 / 04",
  },
];

export default function RallycoreCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
  const nextIndex = (currentSlide + 1) % slides.length;

  return (
    <div className="relative w-full bg-[var(--color-bg-primary)] py-24 overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-12">
        <div className="flex items-center justify-center gap-4 md:gap-8">
          {/* Previous Slide */}
          <div className="hidden xl:block w-72 h-96 opacity-40 transform rotate-y-12 scale-95 z-10 transition-all duration-500 grayscale brightness-50 rounded-2xl overflow-hidden">
            <img
              alt="Previous rally car"
              className="w-full h-full object-cover"
              src={slides[prevIndex].image}
            />
          </div>

          {/* Main Slide */}
          <div className="relative w-full max-w-3xl h-64 md:h-96 z-20 group rounded-2xl overflow-hidden shadow-2xl">
            <img
              alt="Rally car"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={slides[currentSlide].image}
            />

            {/* Category Badge */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
              <span className="px-3 py-1 md:px-4 md:py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-xs md:text-sm font-medium tracking-wider font-['M_PLUS_1']">
                {slides[currentSlide].category}
              </span>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-black/30 backdrop-blur-sm border border-white/10 text-white hover:bg-[#00f4fe]/20 hover:border-[#00f4fe]/30 transition-all duration-300 z-30"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-black/30 backdrop-blur-sm border border-white/10 text-white hover:bg-[#00f4fe]/20 hover:border-[#00f4fe]/30 transition-all duration-300 z-30"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Next Slide */}
          <div className="hidden xl:block w-72 h-96 opacity-40 transform -rotate-y-12 scale-95 z-10 transition-all duration-500 grayscale brightness-50 rounded-2xl overflow-hidden">
            <img
              alt="Next rally car"
              className="w-full h-full object-cover"
              src={slides[nextIndex].image}
            />
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-[#00FFD1]'
                  : 'w-2 bg-[#474746] hover:bg-[#00FFD1]/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
