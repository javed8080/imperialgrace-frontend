import React from 'react'
import "./Features.scss"
import { IoCheckmark } from "react-icons/io5";
import { Container, Row, Col, Button } from 'react-bootstrap';

const Features = () => {

    const featuresData = [
        {
            img: "https://static.chrono24.com/images/default/illustrations/buyer-rating.svg",
            title: "4.8 out of 5 stars",
            description: "from 161,000 reviews worldwide"
        },
        {
            img: "https://static.chrono24.com/images/default/illustrations/love-my-watch.svg",
            title: "9 million",
            description: "watch enthusiasts use Chrono24 each month"
        },
        {
            img: "https://static.chrono24.com/images/default/illustrations/handshake.svg",
            title: "over 200,000",
            description: "customers choose Buyer Protection annually"
        },
        {
            img: "https://static.chrono24.com/images/default/illustrations/dealer.svg",
            title: "More than 25,000",
            description: "trustworthy sellers"
        },
    ]

  return (
    <Container className='feature-list-main'>
        <h2 className='mb-3'>The Leading Marketplace for Luxury Watches Since 2003</h2>
      
      <Container className='feature-one-container'>
        <Row className="justify-content-center mb-5 gap-3">
          {featuresData.map((feature, index) => (
            <Col key={index} lg={3} md={4} xs={12} className='text-center rounded-3 border p-3 feature-card'>
              <img src={feature.img} alt={feature.title} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Col>
          ))}
        </Row>
      </Container>

      <Row className='feature-two-container rounded-3 gap-0'>
        <Col lg={6} xs={12} className='bg-seagreen d-flex justify-content-center flex-column p-5'>
          <h4 className='text-white text-center text-lg-start mb-4'>Chrono24 Buyer Protection</h4>
          <div className='d-flex flex-row flex-lg-column flex-wrap gap-3 mb-5'>
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className='d-flex align-items-center gap-2'>
                <IoCheckmark color='green' />
                <p className='text-white h6'>Payment via the Escrow Service</p>
              </div>
            ))}
          </div>
          <Button className='feature-custom-btn py-2'>Learn more about security</Button>
        </Col>
        <Col lg={6} xs={12} className='p-0'>
          <img 
            src="https://static.chrono24.com/images/default/buyer-protection/buyer-protection-teaser/buyer-protection-teaser-lg.jpg" 
            className='object-fit-cover h-100'
            alt="Buyer Protection"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Features