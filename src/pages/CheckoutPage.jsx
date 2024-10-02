import React, { useState } from 'react'
import Navbar from '../components/navbar/AppHeader';
import { Container, Row, Col, Form, Button, InputGroup, Stack, Image } from 'react-bootstrap';
import { PiMapPinAreaFill } from "react-icons/pi";
import { SiMoneygram } from "react-icons/si";
import { BsCashCoin } from "react-icons/bs";
import CustomButton from '../components/customButton/CustomButton';
import { FaArrowLeft } from 'react-icons/fa';
import Footer from '../components/footer/Footer';
import "../scss/CheckoutPage.scss";
import { useNavigate } from 'react-router';

const CheckoutPage = () => {

    const [paymentMethod, setPaymentMethod] = useState(null)
    const [step, setStep] = useState(1)

    const navigate = useNavigate();

    const handlePaymentMethod = (option) => {
        setPaymentMethod(option)
    }

    const handleNext = () => {
        setStep(prevStep => prevStep + 1)
    }

    const handlePrev = () => {
        setStep(prevStep => prevStep - 1)
    }

    console.log(paymentMethod, step)
  return (
    <>
        <Navbar />
        <div className='cart-page-image'>
            <img src="https://img.freepik.com/premium-photo/shopping-cart-with-red-flower-middle-it_337384-143989.jpg?w=1380" 
                 className='w-100 object-fit-cover'
            />
        </div>

        {step === 1 && <Container className='py-5'>

            <h3 className='mb-5'>Address Type and Delivery</h3>
            <div className='d-flex flex-column flex-md-row justify-content-between mb-5 gap-5'>
                <Container>
                    <div className='option-box border-lightgray mb-4'>
                        <PiMapPinAreaFill size={50} />
                        <p className='mt-3'>Address</p>
                    </div>

                    <Form className="row delivery-address mt-5">
                        <Col lg={6}>
                        <Form.Group controlId="InputFName">
                            <Form.Label className="form-label fw-bold">First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>
                        </Col>

                        <Col lg={6}>
                        <Form.Group controlId="InputLName">
                            <Form.Label className="form-label fw-bold">Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                        </Col>

                        <Col lg={6}>
                        <Form.Group controlId="InputAddress">
                            <Form.Label className="form-label fw-bold">Address</Form.Label>
                            <Form.Control type="text" placeholder="Address" />
                        </Form.Group>
                        </Col>

                        <Col lg={6}>
                        <Form.Group controlId="InputCity">
                            <Form.Label className="form-label fw-bold">City</Form.Label>
                            <Form.Control type="text" placeholder="City" />
                        </Form.Group>
                        </Col>

                        <Col lg={6}>
                        <Form.Group controlId="InputZip">
                            <Form.Label className="form-label fw-bold">Postal/Zip Code</Form.Label>
                            <Form.Control type="text" placeholder="Postal/Zip Code" />
                        </Form.Group>
                        </Col>

                        <Col lg={6}>
                        <Form.Group controlId="InputPhone">
                            <Form.Label className="form-label fw-bold">Phone</Form.Label>
                            <Form.Control type="text" placeholder="(201) 555 1000" />
                        </Form.Group>
                        </Col>

                        <Col lg={6}>
                        <Form.Group controlId="InputCountry">
                            <Form.Label className="form-label fw-bold">Country</Form.Label>
                            <Form.Control type="text" placeholder="Country" />
                        </Form.Group>
                        </Col>

                        <Col lg={6}>
                        <Form.Group controlId="InputEmail">
                            <Form.Label className="form-label fw-bold">Email</Form.Label>
                            <Form.Control type="text" placeholder="example123@abc.com" />
                        </Form.Group>
                        </Col>
                    </Form>

                    <div className="form-check mb-5">
                        <input className="form-check-input billing-address-checkbox" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label billing-address-checkbox-label" for="flexCheckDefault">
                            My delivery and billing addresses are the same.
                        </label>
                    </div>

                    <Form className="row delivery-address mt-5">
                        <Col lg={6}>
                        <Form.Group controlId="InputFName">
                            <Form.Label className="form-label fw-bold">First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>
                        </Col>

                        <Col lg={6}>
                        <Form.Group controlId="InputLName">
                            <Form.Label className="form-label fw-bold">Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                        </Col>

                        <Col lg={6}>
                        <Form.Group controlId="InputAddress">
                            <Form.Label className="form-label fw-bold">Address</Form.Label>
                            <Form.Control type="text" placeholder="Address" />
                        </Form.Group>
                        </Col>

                        <Col lg={6}>
                        <Form.Group controlId="InputCity">
                            <Form.Label className="form-label fw-bold">City</Form.Label>
                            <Form.Control type="text" placeholder="City" />
                        </Form.Group>
                        </Col>

                        <Col lg={6}>
                        <Form.Group controlId="InputZip">
                            <Form.Label className="form-label fw-bold">Postal/Zip Code</Form.Label>
                            <Form.Control type="text" placeholder="Postal/Zip Code" />
                        </Form.Group>
                        </Col>

                        <Col lg={6}>
                        <Form.Group controlId="InputPhone">
                            <Form.Label className="form-label fw-bold">Phone</Form.Label>
                            <Form.Control type="text" placeholder="(201) 555 1000" />
                        </Form.Group>
                        </Col>

                        <Col lg={6}>
                        <Form.Group controlId="InputCountry">
                            <Form.Label className="form-label fw-bold">Country</Form.Label>
                            <Form.Control type="text" placeholder="Country" />
                        </Form.Group>
                        </Col>

                        <Col lg={6}>
                        <Form.Group controlId="InputEmail">
                            <Form.Label className="form-label fw-bold">Email</Form.Label>
                            <Form.Control type="text" placeholder="example123@abc.com" />
                        </Form.Group>
                        </Col>
                    </Form>
                </Container>

                <div className='d-flex flex-column gap-5'>
                    <div className='d-flex gap-5'>
                        <div 
                            className={`option-box ${paymentMethod === 'COD' ? 'border-black' : 'border-lightgray'}`}
                            onClick={() => handlePaymentMethod('COD')}
                        >
                            <BsCashCoin size={50} />
                            <p className='mt-3'>Cash on Delivery</p>
                        </div>

                        <div 
                            className={`option-box ${paymentMethod === 'online' ? 'border-black' : 'border-lightgray'}`}
                            onClick={() => handlePaymentMethod('online')}
                        >
                            <SiMoneygram size={50} />
                            <p className='mt-3'>Payment Online</p>
                        </div>
                    </div>

                    <div className='border border-black px-3 py-3'>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Promo Code"
                            />
                            <Button variant="outline-secondary">
                                Button
                            </Button>
                        </InputGroup>

                        <p className='mb-3'>
                            <span className='fw-bold fs-6'>Shipping Fees:</span> 0000
                        </p>
                        <p className='mb-3'>
                            <span className='fw-bold fs-6'>Total Cost:</span> 0000
                        </p>
                    </div>
                </div>

            </div>

            <div className="d-flex justify-content-between mt-5">
                <div className='d-flex align-items-center' >
                    <FaArrowLeft />
                    <CustomButton children='Go Back' className='fs-6' onClick={() => navigate('/cart-page')}  />
                </div>

                <CustomButton children='Next Step' className='fs-6 btn-black' onClick={handleNext} />

            </div>
            
        </Container>}

        {paymentMethod === 'COD' && step === 2 && (<Container className='py-5'>
            <h2>Summary</h2>

            <Row>
                <Col lg={6}>
                    <h4>You Choose Cash on Delivery</h4>
                    <div className='option-box d-flex justify-content-between py-4 border-lightgray my-4'>
                        <p className='fw-bold fs-6'>Delivery Type</p>
                        <div>
                            <Image src="https://guinee.gologonow.co/assets/images/dpd.png" alt="Delivery Service" fluid />
                            <p className='mt-3 fs-6 fw-bold text-center'>COD</p>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <h4 className='mb-3'>Delivery Address</h4>
                    <div className='d-flex flex-column gap-3'>
                        <p>Name: John</p>
                        <p>Email: user@abc.com</p>
                        <p>City: Hyd</p>
                        <p>Zip: 21500</p>
                        <p>Address: Street # 53, Block E</p>
                    </div>
                </Col>
            </Row>

            <div className='d-flex mt-5'>
                <CustomButton children='Shipping Fees: free' className='btn-lightgray rounded-5 border-white fw-semibold py-2 px-5 me-5' />
                <CustomButton children='Total Cost: $250' className='btn-lightgray rounded-5 border-white fw-semibold py-2 px-5' />
            </div>

            <div className="d-flex justify-content-between mt-5">
                <div className='d-flex align-items-center' >
                    <FaArrowLeft />
                    <CustomButton children='Go Back' className='fs-6' onClick={handlePrev} />
                </div>

                <CustomButton children='Complete Payment' className='fs-6 btn-black' />

            </div>
        </Container>)}

        {paymentMethod === 'online' && step === 2 && (<div className="container py-5 d-flex flex-column align-items-center justify-content-center">
            <h2 className='mb-3'>Online Payment</h2>
            <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ducimus, minima facere illum tempore dolorum aut eum excepturi non deserunt.</p>
            <div className='border border-black rounded-5 px-5 py-2 fs-5 fw-semibold mb-5'>
                Add Your Card
            </div>

            <Form className='user-card-form gap-0 row mb-5'>
            <Col lg={12} className="mb-5">
                    <Form.Group controlId="InputCardHolderName" className="position-relative w-100">
                        <Form.Label className="form-label card-input-label">Card Holder's Name</Form.Label>
                        <Form.Control type="text" className="card-input" />
                    </Form.Group>
                </Col>

                <Col lg={12} className="mb-5">
                    <Form.Group controlId="InputCardNumber" className="position-relative w-100">
                        <Form.Label className="form-label card-input-label">Card Number</Form.Label>
                        <Form.Control type="text" className="card-input" />
                    </Form.Group>
                </Col>

                <Col lg={4} className="mt-3 mb-4 mb-lg-0">
                    <Form.Group controlId="month" className="position-relative">
                        <Form.Label className="form-label card-input-label">Expiry Month</Form.Label>
                        <Form.Select className="card-input">
                            <option value="">--Select Month--</option>
                            <option value="01">January</option>
                            <option value="02">February</option>
                            <option value="03">March</option>
                            <option value="04">April</option>
                            <option value="05">May</option>
                            <option value="06">June</option>
                            <option value="07">July</option>
                            <option value="08">August</option>
                            <option value="09">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </Form.Select>
                    </Form.Group>
                </Col>

                <Col lg={4} className="mt-3 mb-5 mb-lg-0">
                    <Form.Group controlId="year" className="position-relative">
                        <Form.Label className="form-label card-input-label">Expiry Year</Form.Label>
                        <Form.Select className="card-input">
                            <option value="">--Select Year--</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                        </Form.Select>
                    </Form.Group>
                </Col>

                <Col lg={4} className="align-self-end">
                    <Form.Group controlId="InputCardCVV" className="position-relative">
                        <Form.Label className="form-label card-input-label">CVV Number</Form.Label>
                        <Form.Control type="text" className="card-input" />
                    </Form.Group>
                </Col>
            </Form>

            <Form.Group className="mb-5">
                <Form.Check 
                    type="checkbox" 
                    id="flexCheckSaveCard" 
                    label="Do you want to save your card?"
                    className="signup-checkbox"
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Check 
                    type="checkbox" 
                    id="flexCheckTerms" 
                    label="I agree to the Terms and condition of Service and Privacy Policy"
                    className="signup-checkbox"
                />
            </Form.Group>
            <Stack direction='horizontal' className='justify-content-center mt-5' gap={3}>
                <CustomButton children='Go Back' className='btn-lightgray ' onClick={handlePrev} />
                <CustomButton children='Pay Now' className='btn-primary ' onClick={handleNext} />
            </Stack>
        </div>)}

        {paymentMethod === 'online'&& step === 3 && (<div className='container py-5'>
            <h2>Summary</h2>

            <Row>
                <Col lg={6}>
                    <h4>You Choose Online Payment</h4>
                    <div className='option-box justify-content-between py-4 border-lightgray my-4'>
                        <p className='fw-bold fs-6'>Delivery Type</p>
                        <div>
                            <img src="https://guinee.gologonow.co/assets/images/dpd.png" alt="Delivery Type" />
                            <p className='mt-3 fs-6 fw-bold text-center'>Online</p>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <h4 className='mb-3'>Delivery Address</h4>
                    <div className='d-flex flex-column gap-3'>
                        <p>Name: John</p>
                        <p>Email: user@abc.com</p>
                        <p>City: Hyd</p>
                        <p>Zip: 21500</p>
                        <p>Address: Street # 53, Block E</p>
                    </div>
                </Col>
            </Row>

            <div className='d-flex mt-5'>
                <CustomButton children='Shipping Fees: free' className='btn-lightgray rounded-5 border-white fw-semibold py-2 px-5 me-5' />
                <CustomButton children='Total Cost: $250' className='btn-lightgray rounded-5 border-white fw-semibold py-2 px-5' />
            </div>

            <div className="d-flex justify-content-between mt-5">
                <div className='d-flex align-items-center' >
                    <FaArrowLeft />
                    <CustomButton children='Go Back' className='fs-6' onClick={handlePrev} />
                </div>

                <CustomButton children='Complete Payment' className='fs-6 btn-black' />

            </div>
        </div>)}

        <Footer />
    </>
  )
}

export default CheckoutPage