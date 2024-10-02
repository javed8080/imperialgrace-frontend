import React from 'react'
import Navbar from '../components/navbar/AppHeader'
import { Container, Image, Stack } from 'react-bootstrap'
import Footer from '../components/footer/Footer'
import Business from '../components/business/Business'

const AboutUs = () => {
  return (
    <>
        <Navbar />
        <Image 
            src="https://as2.ftcdn.net/v2/jpg/01/27/16/25/1000_F_127162573_kcES41FWV2OOdI5GxdD4di6l4O8o0AZb.jpg"
            className='w-100 object-fit-cover'
            style={{ height: '50vh' }}
        />
        <Container className='my-5'>
            <Stack gap={3}>
                <p className='fs-6'>
                    
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p className='fs-6'>
                    
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p className='fs-6'>
                    
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p className='fw-bold fs-6'>What this Privacy Policy Covers</p>
                <p className='fs-6'>
                    
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </Stack>
        </Container>

        <Business />

        <Footer />
    </>
  )
}

export default AboutUs