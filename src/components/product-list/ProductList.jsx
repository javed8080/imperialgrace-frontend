import React from 'react';
import "./ProductList.scss";
import ProductItem from '../product-item/ProductItem';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Container, Button } from 'react-bootstrap';

const ProductList = ({ sectionName }) => {
  // product-detail
  const items = [
    {
      name: "Rolex",
      price: "Rs 250,000",
      image: "https://i.ebayimg.com/images/g/8o0AAOSwubRXDquu/s-l1200.jpg"
    },
    {
      name: "Rolex",
      price: "Rs 250,000",
      image: "https://timepieceoutfitters.com/cdn/shop/products/product-image-902018851_600x.jpg?v=1572131303"
    },
    {
      name: "Rolex",
      price: "Rs 250,000",
      image: "https://static-01.daraz.lk/p/1dba9c33e73ceeccaba7a6de888e211b.jpg_750x750.jpg_.webp"
    },
    {
      name: "Rolex",
      price: "Rs 250,000",
      image: "https://ae01.alicdn.com/kf/HTB19AEKMVXXXXXXapXXq6xXFXXXc/205486362/HTB19AEKMVXXXXXXapXXq6xXFXXXc.jpg?size=117225&height=800&width=800&hash=8afd345ee99662f312d7812c14ae9a22"
    },
    {
      name: "Rolex",
      price: "Rs 250,000",
      image: "https://i.ebayimg.com/images/g/8o0AAOSwubRXDquu/s-l1200.jpg",
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    variableWidth: true,
    slidesToShow: 3, 
    slidesToScroll: 1,
    nextArrow: <FaArrowRight />,
    prevArrow: <FaArrowLeft />,
    responsive: [
      {
        breakpoint: 1024, // Large screens (lg)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, // Medium screens (md)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480, // Small screens (sm)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <Container className='py-5'>
        <h2 className='text-center mb-5'>{sectionName}</h2>
      
      <div>
        <Slider {...settings}>
          {items.map((item, index) => (
            <ProductItem key={index} name={item.name} image={item.image} price={item.price} />
          ))}
        </Slider>
      </div>
      
      <div className='d-flex justify-content-center'>
        <Button variant='outline-primary' className='mt-5'>
          View More
        </Button>
      </div>
    </Container>
  )
}

export default ProductList