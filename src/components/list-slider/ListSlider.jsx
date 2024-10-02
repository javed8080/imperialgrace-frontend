import React from 'react';
import Slider from 'react-slick';
import CustomButton from '../customButton/CustomButton';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ListSlider.scss"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Container } from 'react-bootstrap';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <IoIosArrowForward color='black' />,
    prevArrow: <IoIosArrowBack color='black' />,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: <IoIosArrowForward color='black' />,
          prevArrow: <IoIosArrowBack color='black' />,
        }
      }
    ]
  };

  const slides = [
    { id: 1, brand1: 'Rolex', brand2: 'Seiko' },
    { id: 2, brand1: 'Omega', brand2: 'Casio' },
    { id: 3, brand1: 'Breitling', brand2: 'Citizen' },
    { id: 4, brand1: 'Tag Heuer', brand2: 'Fossil' },
    { id: 5, brand1: 'Tissot', brand2: 'Swatch' },
    { id: 6, brand1: 'Longines', brand2: 'Hamilton' },
  ];

  return (

    <Container className='list-slider-container py-5 d-flex flex-column'>
        <h2 className='mb-4'>Popular Brands</h2>
        <Slider {...settings}>

            {slides.map(slide => (
                <div key={slide.id} className='slick-slide-custom'>

                    <div className='d-flex flex-column gap-4'>
                        <div className='bg-skin text-primary text-center py-3 rounded-3'>
                            {slide.brand1}
                        </div>
                        <div className='bg-skin text-primary text-center py-3 rounded-3'>
                            {slide.brand2}
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
        <CustomButton className="btn-outline-secondary align-self-center mt-5" children="Display All" />
    </Container >
  );
};

export default Carousel;
