import React from 'react'
import Navbar from '../components/navbar/AppHeader'
import { Container, Image, Row, Col, Stack, Form } from 'react-bootstrap'
import "../scss/ContactUs.scss"
import CustomButton from '../components/customButton/CustomButton'
import Footer from '../components/footer/Footer'

const ContactUs = () => {
  return (
    <>
        <Navbar />
        <Image 
            src='https://e3panels.com/wp-content/uploads/2024/01/Contact-us_1920-x-800-px.jpg' 
            className='w-100 object-fit-cover contact-us-banner'
        />
        <h1 className='fw-normal mx-auto my-5' style={{ width: '450px' }} >Fill the form below if you have any queries</h1>

        <Container className='min-vh-100'>
            <Row className='gap-5'>
                <Col lg={6} className='bg-lightgray py-5 px-4 rounded-2'>
                    <Stack gap={5}>
                        <h5 className='text-center fs-4 mb-0'>Get In Touch</h5>
                        <Form>
                            <Row style={{ rowGap: "20px" }}>
                                <Col md={6}>
                                    <Form.Control type="text" placeholder="First Name" />
                                </Col>
                                <Col md={6}>
                                    <Form.Control type="text" placeholder="Last Name" />
                                </Col>
                                <Col>
                                    <Form.Control type="text" placeholder="Email:" />
                                </Col>
                                <Col>
                                    <Form.Control type="text" placeholder="Website:" />
                                </Col>
                                <Col md={12}>
                                    <Form.Control type='text' placeholder='Company' />
                                </Col>
                                <Col md={12}>
                                    <Form.Control type='text' placeholder='Subject' />
                                </Col>
                                <Col md={12}>
                                    <Form.Control as={'textarea'} type='text' rows={3} />
                                </Col>
                            </Row>

                        </Form>

                        <CustomButton className="btn-primary fs-5" children="Submit" />
                    </Stack>
                </Col>

                <Col lg={6} className='bg-skin py-5 px-4 rounded-2'>
                    <Stack>
                        <h5 className='mb-4 fs-4'>Additional Information</h5>
                        <h6 className='fs-5 '>Business Queries</h6>
                        <Stack gap={1} className='mb-4'>
                            <p>Name: John Samo</p>
                            <p>Contact: +1 213 123 1222</p>
                            <p>Email: john@hotmal.com</p>
                            <p>Address: Room # 12, Main Office, Tapei, Taiwan</p>
                        </Stack>
                        <h6 className='fs-5' >Customer Support</h6>
                        <Stack gap={1}>
                            <p>Name: Kim San</p>
                            <p>Contact: +1 231 312 1111</p>
                            <p>Emai: kim@hotmail.com</p>
                            <p>Address: Room # 12, Main Office, Tapei, Taiwan</p>
                        </Stack>
                    </Stack>
                </Col>
            </Row>
        </Container>

        <Footer />
    </>
  )
}

export default ContactUs