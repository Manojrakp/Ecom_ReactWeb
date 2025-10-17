import React, { useState } from "react";
import "./AdsSlider.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function AdsSlider({ homeAds = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const adCount = homeAds.length;

  if (adCount === 0) {
    return null;
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? adCount - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === adCount - 1 ? 0 : prev + 1));
  };

  const currentAd = homeAds[currentIndex];

  return (
    <div className="ads-slider">
      <button
        className="ads-slider__arrow-left"
        onClick={handlePrev}
        aria-label="Previous Ad"
      >
        <IoChevronBack
          size={30}
          className="arrow-icon"
          style={{ strokeWidth: 0.5 }}
        />
      </button>

      <div className="ads-slider__image-container">
        <img
          key={currentIndex}
          src={currentAd.imageUrl}
          alt={currentAd.title}
          className="ads-slider__img"
        />
      </div>

      <button
        className="ads-slider__arrow-right"
        onClick={handleNext}
        aria-label="Next Ad"
      >
        <IoChevronForward
          size={30}
          className="arrow-icon"
          style={{ strokeWidth: 0.5 }}
        />
      </button>
    </div>
  );
}

export default AdsSlider;
