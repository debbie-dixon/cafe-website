import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional icons
import image from "../assets/image.jpeg";
import Header from "./Header";

const slides = [
  { url: image, title: "Mountain" },
  { url: image, title: "Forest" },
  { url: image, title: "Bridge" },
];

export default function Gallery({ autoPlayInterval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Optional: Autoplay effect
  useEffect(() => {
    const slideTimer = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(slideTimer); // Cleanup timer on unmount
  }, [currentIndex, autoPlayInterval]);

  return (
    <>
      <Header text="Gallery" id="gallery" />
      <div className="max-w-200 h-115 w-full m-auto py-16 px-4 relative group">
        {/* Slide Image Container */}
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500 transition-all shadow-lg"
        ></div>

        {/* Left Arrow Controls */}
        <button
          onClick={prevSlide}
          className="hidden group-hover:block absolute top-[50%] translate-x translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer hover:bg-black/70 transition-colors"
        >
          <ChevronLeft size={30} />
        </button>

        {/* Right Arrow Controls */}
        <button
          onClick={nextSlide}
          className="hidden group-hover:block absolute top-[50%] translate-x translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer hover:bg-black/70 transition-colors"
        >
          <ChevronRight size={30} />
        </button>

        {/* Bottom Dot Indicators */}
        <div className="flex justify-center py-2 gap-2">
          {slides.map((slide, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`cursor-pointer text-2xl rounded-full transition-all duration-300 ${
                currentIndex === slideIndex
                  ? "text-blue-600 scale-125"
                  : "text-gray-400"
              }`}
            >
              •
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
