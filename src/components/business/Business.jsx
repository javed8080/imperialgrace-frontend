import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import CustomButton from '../customButton/CustomButton'
import "./Business.scss"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Business = () => {
  return (
    <Container fluid className='min-vh-100 p-0 d-flex flex-column align-items-center'>
      <h2 className='text-center mb-3'>Business Like A Pro With Us</h2>
      <p className='text-center mb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eum quaerat tempora voluptatem totam rem numquam animi ipsa, maxime nesciunt.
      </p>
      <CustomButton children='Get Online' className='btn-primary mb-5' />

      <Row className='gap-3 gap-lg-0 py-4 p-lg-0 w-100 business-contact bg-lightgray'>
        <Col lg={6} className='d-flex align-items-center justify-content-center'>
          <Form className='business-contact-form'>
            <h2 className='mb-5'>Contact Us</h2>
            <Form.Select className='mb-3'>
              <option>Open this select menu</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </Form.Select>
            <Form.Group className='mb-3'>
              <Form.Control type='email' placeholder='Email' />
            </Form.Group>
            <Form.Group className='mb-4'>
              <Form.Label htmlFor='floatingTextarea2'>Write Your Message</Form.Label>
              <Form.Control as='textarea' id='floatingTextarea2' placeholder='Leave a comment here' />
            </Form.Group>
            <CustomButton children='Submit' className='btn-primary mb-4 w-100' />
            <p className='mb-3'>Info@Guineebusinessonline.Com | +00 1111 22 12345</p>
            <div className='d-flex gap-3'>
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </div>
          </Form>
        </Col>
        <Col lg={6} className='business-contact-image-container'>
          <img 
            src="https://media.istockphoto.com/photos/young-confident-successful-business-people-discuss-and-analyze-work-picture-id1313264835?k=20&m=1313264835&s=612x612&w=0&h=L55FyMCGTU2bHwHavfTa2tqZGwp9XqTK5tt5cy7bH4o="
            alt='Business Contact'
            className='w-100 img-fluid'
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Business