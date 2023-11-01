import React, { useState, useEffect } from "react";
import "./Assets/styles/MainSlider.css";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const totalSlides = 3;

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const nextSlide = () => {
    setActiveSlide((activeSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((activeSlide - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 4000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [activeSlide]);

  const slides = [
    {
      image:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      alt: "Image 1",
    },
    {
      image:
        "https://media.istockphoto.com/id/1029175372/photo/the-man-and-woman-standing-on-the-sky-with-stars-background.webp?b=1&s=170667a&w=0&k=20&c=zasx4BbJ_Hlmr2ixrj0vhRoGpSoZEQKcO4IZS4qTXlQ=",
      alt: "Image 2",
    },
    {
      image:
        "https://media.istockphoto.com/id/508813630/photo/milky-way-night-sky-and-silhouette-of-a-standing-man.jpg?s=612x612&w=is&k=20&c=lkGxhYx4I8ZFObD5G2d0VMh2G9_KFY4M4Vp9SHsKPPE=",
      alt: "Image 3",
    },
  ];

  // Helper function to get a safe index within bounds
  const getSafeIndex = (index) => {
    if (index < 0) {
      return totalSlides - 1;
    } else if (index >= totalSlides) {
      return 0;
    }
    return index;
  };

  return (
    <div className="slider">
      <div className="slider-wrapper">
        {[-1, 0, 1].map((offset) => {
          const index = getSafeIndex(activeSlide + offset);
          return (
            <div
              key={index}
              className={`slide ${offset === 0 ? "active" : ""}`}
            >
              <img src={slides[index].image} alt={slides[index].alt} />
            </div>
          );
        })}
      </div>
      <div className="slider-controls">
        <button onClick={prevSlide} className="control-button">
          Previous
        </button>
        <button onClick={nextSlide} className="control-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
