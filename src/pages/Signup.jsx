import React from 'react'
import AppHeader from '../components/navbar/AppHeader'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useState } from 'react'
import "../scss/Signup.scss"
import Footer from '../components/footer/Footer'
import CustomButton from '../components/customButton/CustomButton'
import { Link } from 'react-router-dom'
import LoginImage from "../assets/images/bg-logon.png";
import {Container, Form ,Image, Button } from 'react-bootstrap'

const Signup = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

  return (
    <>
     <AppHeader />
      <Image 
        src={LoginImage}
        className="w-100 login-banner" 
        fluid
      />
         <Container fluid className="d-flex flex-column justify-content-center align-items-center py-4">
            <Form className="d-flex flex-column gap-5 signup-form-container p-5">
                <h1>Create Account</h1>

                <Form.Group controlId="InputFirstName" className="position-relative mb-3">
                    <Form.Label className="signup-input-label">First Name</Form.Label>
                    <Form.Control type="text" className="signup-input" />
                </Form.Group>

                <Form.Group controlId="InputLastName" className="position-relative mb-3">
                    <Form.Label className="signup-input-label">Last Name</Form.Label>
                    <Form.Control type="text" className="signup-input" />
                </Form.Group>

                <Form.Group controlId="InputEmail1" className="position-relative mb-3">
                    <Form.Label className="signup-input-label">Email address</Form.Label>
                    <Form.Control type="email" className="signup-input" aria-describedby="emailHelp" />
                </Form.Group>

                <Form.Group controlId="InputPassword" className="position-relative mb-3">
                    <Form.Label className="signup-input-label">Password</Form.Label>
                    <Form.Control
                        type={passwordVisible ? 'text' : 'password'}
                        className="signup-input"
                    />
                    <Button
                        className="btn-white show-hide-btn"
                        type="button"
                        onClick={togglePasswordVisibility}
                    >
                        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                </Form.Group>

                <Form.Group controlId="InputPhoneNumber" className="position-relative mb-3">
                    <Form.Label className="signup-input-label">Phone Number</Form.Label>
                    <Form.Control type="tel" className="signup-input" />
                </Form.Group>

                <Form.Group controlId="flexCheckDefault" className="form-check mb-3">
                    <Form.Check
                        type="checkbox"
                        className="signup-checkbox"
                        label="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quaerat ad dolorem expedita error aliquid."
                    />
                </Form.Group>

                <CustomButton className="btn btn-primary text-white py-3 fs-4 fw-bold" children="Sign up" />
            </Form>

            <Link to="/login" className="text-primary">
                Login to your Account
            </Link>
        </Container>
        <Footer />
    </>
  )
}

export default Signup