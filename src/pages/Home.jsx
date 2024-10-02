import React from 'react'
import HeroSection from '../components/Hero/HeroSection'
import ListSlider from '../components/list-slider/ListSlider'
import Features from '../components/Features/Features'
import PopularModels from '../components/product-list/ProductList'
import Collections from '../components/collections/Collections'
import Blog from "../components/blog/Blog"
import ProductList from '../components/product-list/ProductList'
import Showoff from '../components/Showoff/Showoff'
import NewsLetter from '../components/newsletter/NewsLetter'
import Footer from '../components/footer/Footer'
import AppHeader from '../components/navbar/AppHeader'
import ShippingFeatures from '../components/ShippingFeatures/ShippingFeatures'
import Explore from '../components/explore/Explore'
import Business from '../components/business/Business'
import Offers from '../components/offers/Offers'

const Home = () => {
  return (
    <div>
        <AppHeader />

        <HeroSection />

        <Offers />

        <ListSlider />

        <Features />

        <Explore />

        <Collections />

        <ProductList sectionName='Featured Products' />

        {/* <ShippingFeatures /> */}

        <Blog />

        <ProductList sectionName='Recommended' />

        <Showoff />

        <ProductList sectionName='New Collections' />

        <Business />

        <NewsLetter />

        <Footer />
    </div>
  )
}

export default Home