import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.scss"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Container, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer =  () => {
  return (
    <footer className=" bg-dark pt-5">
      <Container>
        <Row className="align-items-start footer-content">
          <div className="col-md-4 mb-4 mb-md-0 text-white">
            <img 
              src="https://th.bing.com/th/id/OIP.rDZhVvto_je6rLox0qGLcgHaHa?rs=1&pid=ImgDetMain" 
              className='mb-3 logo'
            />
            <h5>About Us</h5>
            <p>
              We are a company committed to providing the best service and quality products to our customers. Our team is dedicated to ensuring your satisfaction.
            </p>
          </div>

          <div className="col-md-4 col-6 text-white d-grid align-items-center justify-content-md-center justify-content-start">
            <Stack className=''>
              <h5 className='fw-bold mb-3'>Quick Links</h5>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <Link to={'/'} className='text-decoration-none fs-6'>Order Status</Link>
                <Link to={'/'} className='text-decoration-none fs-6'>Shipping</Link>
                <Link to={'/'} className='text-decoration-none fs-6'>Delivery</Link>
                <Link to={'/about-us'} className='text-decoration-none fs-6'>About US</Link>
                <Link to={'/contact-us'} className='text-decoration-none fs-6'>Contact US</Link>
              </ul>
            </Stack>
          </div>

          <div className="col-md-4 col-6 text-white d-grid align-items-center justify-content-center">
            <Stack className="">
              <h5 className='fw-bold mb-3'>Popular</h5>
              <ul className="list-unstyled text-white d-flex flex-column  gap-2">
                <li>Gift Store</li>
                <li>Find a Store</li>
                <li>Newsletter</li>
                <li>Careers</li>
                <li>Become a member</li>
                <li>Setup my business</li>
              </ul>
              <div className='d-flex gap-2 text-white'>
                <FaFacebook />
                <FaInstagram  />
                <FaTwitter  />
              </div>
            </Stack>
          </div>
        </Row>

        <div className="text-center text-white py-3">
          <p className="mb-0">© 2024 Your Company Name. All rights reserved.</p>
        </div>

      </Container>
    </footer>
  );
}

export default Footer;
