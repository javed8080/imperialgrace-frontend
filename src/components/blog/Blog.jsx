import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import "./Blog.scss"

const Blog = () => {
  return (
    <Container className='py-5'>
        <Row>
        <Col lg={6} className='d-flex flex-column justify-content-center align-items-center align-items-lg-start gap-3 mb-3 mb-lg-0'>
          <h2>New Blog</h2>
          <p>Something Beautiful Belongs to Us</p>
          <p className='lead w-75'>
            Something Beautiful Belongs to Us Michele seemed to say, was the 21st-century Gucci girl, an eccentric, fresh-faced weirdo who wasn’t afraid to wear backless fur-lined loafers, to personify the idea of ugly pretty.
          </p>
          <Button variant='primary' className='text-white'>
            Read More
          </Button>
        </Col>

        <Col lg={6}>
          <img 
            src="https://www.bobswatches.com/images/hp-sell-luxury-watch-960.jpg" 
            className='img-fluid rounded-5'
            alt="Blog Image"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Blog