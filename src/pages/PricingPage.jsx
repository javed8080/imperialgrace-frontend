import React from 'react'
import Subscriptions from '../components/subscriptions/Subscriptions'
import Navbar from '../components/navbar/AppHeader'
import "../scss/pricing.scss"

const PricingPage = () => {
  return (
    <div className='min-vh-100 position-relative bg-lightgray'>
      <Navbar />
      <div className='pricing-page-header'>
        <h1 className='text-center pt-5'>Select The Plan Which best suits for you</h1>
      </div>
      <Subscriptions />
    </div>
  )
}

export default PricingPage