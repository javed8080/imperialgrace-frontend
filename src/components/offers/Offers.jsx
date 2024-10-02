import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import watchone from "../../assets/images/watch-2.png";
import watchtwo from "../../assets/images/watch-8.png";
import watchthree from "../../assets/images/watch-9.png";
import CustomButton from '../customButton/CustomButton';
import "./Offers.scss";

const Offers = () => {
  return (
    <section className='container-fluid py-5 p-0 offers-section'>
      <Container fluid>
        <Row className="justify-content-between gap-3">
          <Col md={12} lg={5} xl={5} className="p-4 d-flex align-items-center justify-content-center bg-lightgray">
            <div>
              <h4>UPTO 40% OFF Final Sale</h4>
              <CustomButton children="Shop Now" />
            </div>
            <img 
              src={watchone} 
              className='offer-image w-50' 
              alt="Watch One"
            />
          </Col>

          <Col md={6} lg={3} xl={3} className="d-flex flex-column justify-content-between align-items-center py-4 bg-skin watch-two-container watch-container">
            <div>
              <h2>Final Sale</h2>
            </div>
            <img 
              src={watchtwo} 
              className='w-50' 
              alt="Watch Two"
            />
          </Col>

          <Col md={6} lg={3} xl={3} className="position-relative bg-skin text-end pt-4 pe-5 watch-three-container watch-container">
            <div>
              <h4 className='fw-bold'>New Collections & Exciting Offers</h4>
              <CustomButton children="Shop Now" />
            </div>
            <img 
              src={watchthree} 
              className='watch-three w-50' 
              alt="Watch Three"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Offers