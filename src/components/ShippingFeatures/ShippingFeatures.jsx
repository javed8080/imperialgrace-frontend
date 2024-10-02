import React from 'react'
import { BsBoxFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaTruck, FaWallet } from "react-icons/fa6";
import { Container, Row, Col } from 'react-bootstrap';

const ShippingFeatures = () => {
    const keyNotes = [
        {
            icon: <BsBoxFill size={50} className='text-primary'/>,
            name: "Secure packaging",
            description: "Your items will arrive in one piece in secure packaging."
        },
        {
            icon: <FaTruck size={50} className='text-primary' />,
            name: "Free Shipping",
            description: "Don’t pay extra fees for your delivery. Nationwide free delivery."
        },
        {
            icon: <FaWallet size={50} className='text-primary'/>,
            name: "Cash on Delivery",
            description: "Pay when you receive your items. Cash on Delivery available."
        }
    ]

    
  return (
    <Container fluid className='d-flex flex-column gap-4 mt-5'>
      <Row className='d-flex justify-content-center gap-5'>
        {keyNotes.map((note, index) => (
          <Col key={index} lg={3} className='d-flex justify-content-center gap-3'>
            <div>{note.icon}</div>
            <div>
              <h4 className='mb-0'>{note.name}</h4>
              <p>{note.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ShippingFeatures