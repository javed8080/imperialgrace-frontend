import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "./Subscriptions.scss"
import { FaCheck, FaCheckCircle } from 'react-icons/fa';

const Subscriptions = () => {
  return (
    <Container className='sub-card d-flex justify-content-center my-5'>
    <Row>
      {/* Starter */}
      <Col xs={12} md={4} className='mb-4'>
        <Card className='text-white bg-black'>
          <Card.Header className='text-center text-white'>Starter</Card.Header>
          <Card.Body>
            <Card.Title className='text-center mb-3'>$9.99 <span>/ month</span></Card.Title>
            <Card.Text className='mb-5'>Basic features to get started</Card.Text>
            <ul className='list-group list-group-flush d-flex flex-column gap-2'>
              <li className='list-group-item'>
                <FaCheckCircle className='me-2' />
                Feature 1
              </li>
              <li className='list-group-item'>
                <FaCheckCircle className='me-2' />
                Feature 2
              </li>
              <li className='list-group-item'>
                <FaCheckCircle className='me-2' />
                Feature 3
              </li>
              <li className='list-group-item'>
                <FaCheckCircle className='me-2' />
                Feature 4
              </li>
              <li className='list-group-item'>
                <FaCheckCircle className='me-2' />
                Feature 5
              </li>
            </ul>
            <Button variant='outline-white' className='w-100 mt-5'>Choose Plan</Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Advanced */}
      <Col xs={12} md={4} className='mb-4'>
        <Card className='text-white bg-black'>
          <Card.Header className='text-center text-white'>Advanced</Card.Header>
          <Card.Body>
            <Card.Title className='text-center mb-3'>$19.99 <span>/ month</span></Card.Title>
            <Card.Text className='mb-5'>Enhanced features for growing needs</Card.Text>
            <ul className='list-group list-group-flush d-flex flex-column gap-2'>
              <li className='list-group-item'>
                <FaCheckCircle className='me-2' />
                Feature 1
              </li>
              <li className='list-group-item'>
                <FaCheckCircle className='me-2' />
                Feature 2
              </li>
              <li className='list-group-item'>
                <FaCheckCircle className='me-2' />
                Feature 3
              </li>
              <li className='list-group-item'>
                <FaCheckCircle className='me-2' />
                Feature 4
              </li>
              <li className='list-group-item'>
                <FaCheckCircle className='me-2' />
                Feature 5
              </li>
            </ul>
            <Button variant='outline-white' className='w-100 mt-5'>Choose Plan</Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Premium */}
      <Col xs={12} md={4} className='mb-4'>
        <Card className='text-white bg-black'>
          <Card.Header className='text-center text-white'>Premium</Card.Header>
          <Card.Body>
            <Card.Title className='text-center mb-3'>$29.99 <span>/ month</span></Card.Title>
            <Card.Text className='mb-5'>All features for professionals</Card.Text>
            <ul className='list-group list-group-flush d-flex flex-column gap-2'>
              <li className='list-group-item'>
                <FaCheckCircle className='me-2' />
                Feature 1
              </li>
              <li className='list-group-item'>
                <FaCheckCircle className='me-2' />
                Feature 2
              </li>
              <li className='list-group-item'>
                <FaCheckCircle className='me-2' />
                Feature 3
              </li>
              <li className='list-group-item'>
                <FaCheckCircle className='me-2' />
                Feature 4
              </li>
              <li className='list-group-item'>
                <FaCheckCircle className='me-2' />
                Feature 5
              </li>
            </ul>
            <Button variant='outline-white' className='w-100 mt-5'>Choose Plan</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}

export default Subscriptions