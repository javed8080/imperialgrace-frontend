import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./ImageSlider.scss"


// Custom Next Arrow
const NextArrow = ({ className, style, onClick }) => {
    return (
        <FaArrowRight 
            className={`${className} custom-next-arrow`}
            onClick={onClick}
        />
    );
  };
  
  // Custom Prev Arrow
  const PrevArrow = ({ className, style, onClick, color }) => {
    return (
      <FaArrowLeft
        className={`${className} custom-prev-arrow`}
        onClick={onClick} 
      />
    );
  };


const ImageSlider = ({ images }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow className='d-flex' />,
    prevArrow: <PrevArrow color='red' className='d-flex align-items-center' />,
    asNavFor: nav2,
  };

  const settingsThumbs = {
    slidesToShow: images.length > 4 ? 4 : images.length,
    slidesToScroll: 1,
    asNavFor: nav1,
    focusOnSelect: true,
    dots: false,
    arrows: false,
    className: "custom-thumb-slider"
  };

  return (
    <div className="border slider-container">
      {/* Main Slider */}
      <Slider {...settingsMain} ref={(slider1) => setNav1(slider1)}>
        {images.map((image, index) => (
          <div key={index} className="w-75 text-center">
            <img src={image} alt={`Slide ${index}`} className="img-fluid slider-images" />
          </div>
        ))}
      </Slider>

      {/* Thumbnail Slider */}
      <Slider {...settingsThumbs} ref={(slider2) => setNav2(slider2)}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Thumbnail ${index}`} style={{ width: "100px", cursor: "pointer" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
