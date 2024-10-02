import React from 'react'
import './HeroSection.scss'
import { MdOutlineStar } from "react-icons/md";
import CustomButton from '../customButton/CustomButton';


const HeroSection = () => {
  return (
    <section className='hero-section py-5 d-flex'>
        <div className='container w-lg-50 w-100 hero-container d-flex flex-column justify-content-center align-items-center gap-3'>
            <h1 className='text-center hero-heading text-white'>
                Pre-Owned Rolex Watches
            </h1>
            
            <CustomButton className="border-black hero-btn" children="Buy Now" />
        </div>
    </section>
  )
}

export default HeroSection