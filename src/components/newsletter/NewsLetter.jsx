import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "./NewsLetter.scss"

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <Container fluid className="mt-5 py-5 bg-lightgray position-relative newsletter-Container">
    <Row>
      <Col lg={12}>
        <Container className="p-4">
          <h3 className="text-center text-black mb-4">Subscribe to our Newsletter</h3>
          <Form onSubmit={handleSubmit} className="d-flex flex-sm-row flex-column align-items-center gap-4">
            <Form.Group className="w-md-75 w-100">
              <Form.Control 
                type="email"
                className="fs-5"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <Button type="submit" className="btn-black w-sm-25 fs-5">Subscribe</Button>
          </Form>
        </Container>
      </Col>
    </Row>
  </Container>
  );
}

export default Newsletter;
