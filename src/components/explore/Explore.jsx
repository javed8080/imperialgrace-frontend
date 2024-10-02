import React from 'react'
import CustomButton from '../customButton/CustomButton'
import { Container,Row, Col, Image, Button } from 'react-bootstrap'

const Explore = () => {
  return (
    <Container className='py-5'>
        <h2 className='mb-5'>Explore Watches</h2>
      
      <Container>
        <Row className='gap-0 mb-3'>
          <Col md={4} lg={4} xl={3} xxl={3}>
            <Image 
              src="https://timepieceoutfitters.com/cdn/shop/products/product-image-902018851_600x.jpg?v=1572131303"  
              className='mb-3 rounded-4 w-100'
              fluid
            />
            <p className='fw-bold'>Men's Watch</p>
          </Col>
          <Col md={4} lg={4} xl={3} xxl={3}>
            <Image 
              src="https://static-01.daraz.lk/p/1dba9c33e73ceeccaba7a6de888e211b.jpg_750x750.jpg_.webp"  
              className='mb-3 rounded-4 w-100'
              fluid
            />
            <p className='fw-bold'>Men's Watch</p>
          </Col>
          <Col md={4} lg={4} xl={3} xxl={3}>
            <Image 
              src="https://ae01.alicdn.com/kf/HTB19AEKMVXXXXXXapXXq6xXFXXXc/205486362/HTB19AEKMVXXXXXXapXXq6xXFXXXc.jpg?size=117225&height=800&width=800&hash=8afd345ee99662f312d7812c14ae9a22"  
              className='mb-3 rounded-4 w-100'
              fluid
            />
            <p className='fw-bold'>Men's Watch</p>
          </Col>
          <Col lg={4} xl={3} className='d-none d-xl-block'>
            <Image 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRikBG148kbz_IF_PKe-UUJmU_4FuHC1SJVZOrf0g59gmy-6s6uTOcCLxmxgvvHkzGE-T4&usqp=CAU"  
              className='mb-3 rounded-4 w-100'
              fluid
            />
            <p className='fw-bold'>Men's Watch</p>
          </Col>
        </Row>

        <Row className='gap-0'>
          <Col md={4} lg={4} xl={3} xxl={3}>
            <Image 
              src="https://img4.dhresource.com/webp/m/0x0/f3/albu/km/z/05/a7ff8264-b5cf-4293-9bd0-60f2372b81a0.jpg"  
              className='mb-3 rounded-4 w-100'
              fluid
            />
            <p className='fw-bold'>Men's Watch</p>
          </Col>
          <Col md={4} lg={4} xl={3} xxl={3}>
            <Image 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0x7HlOnWXueG906ORFuyBVdLB8Fr9BOIqVUJFHjzHww631YwLQ3Wl4OMVn7IxlZzOVP8&usqp=CAU"  
              className='mb-3 rounded-4 w-100'
              fluid
            />
            <p className='fw-bold'>Men's Watch</p>
          </Col>
          <Col md={4} lg={4} xl={3} xxl={3}>
            <Image 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv6g4Qojkzn2OoxLCv04xrSuRQMlTSKylFibAddJ6m3wydyTZkxiATkj-v0C2aYa2jkjg&usqp=CAU"  
              className='mb-3 rounded-4 w-100'
              fluid
            />
            <p className='fw-bold'>Men's Watch</p>
          </Col>
          <Col lg={4} xl={3} className='d-none d-xl-block'>
            <Image 
              src="https://i.ebayimg.com/images/g/8o0AAOSwubRXDquu/s-l1200.jpg"  
              className='mb-3 rounded-4 img-fluid'
              fluid
            />
            <p className='fw-bold'>Men's Watch</p>
          </Col>
        </Row>

        <div className='text-center mt-5'>
          <Button variant='outline-primary'>Display All</Button>
        </div>
      </Container>
    </Container>
  )
}

export default Explore