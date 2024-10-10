

import React, { useState, useEffect } from 'react';
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

import './Slider.css'

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://image3.jdomni.in/banner/12072022/86/47/47/9E7D0851378372E19AF2BDF807_1657618417292.jpeg?output-format=webp',
    'https://image2.jdomni.in/banner/12072022/21/B4/8B/EB5B3D292300A637A8FC4FC93E_1657617783215.jpeg?output-format=webp',
    'https://image3.jdomni.in/banner/12072022/86/47/47/9E7D0851378372E19AF2BDF807_1657618417292.jpeg?output-format=webp'
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // Automatic image change functionality
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      nextSlide();
    }, 2100); // Change image every 3 seconds (adjust as needed)

    return () => clearTimeout(timeoutId); // Cleanup function to prevent memory leaks
  }, [currentIndex, images.length]); // Run effect only when currentIndex or images.length changes

  return (
    <div className="image-slider max-w-[1126px] mx-auto mt-2">
      {/* Slider container and image elements */}
      <div className="slider-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'slide active' : 'slide'}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Navigation controls */}
      {/* <div className="slider-controls">
        <button onClick={prevSlide}><IoIosArrowDropleft size={28}/></button>
        <button onClick={nextSlide}><IoIosArrowDropright size={28}/></button>
      </div> */}
    </div>
  );
}

export default ImageSlider;