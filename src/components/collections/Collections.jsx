import React from 'react'
import "./Collections.scss"
import CustomButton from "../customButton/CustomButton"
import { Container, Row, Col, Button } from 'react-bootstrap'

const Collections = () => {

    // const myCollections = [
    //     { name: "Mens Collection", description: "Stylish and Elegent" }
    // ]

  return (
    <Container fluid>
        <Row>
        <Col className='py-3 collections-item collections-item-one' xs={12} lg={4}>
          <div className='d-flex flex-column gap-5 align-items-center justify-content-center collections-item-content'>
            <h2 className='text-white'>Mens Collection</h2>
            <h4 className='text-white'>Stylish and Elegant</h4>
            <Button variant='outline-white'>View More</Button>
          </div>
        </Col>

        <Col className='py-3 collections-item collections-item-two' xs={12} lg={4}>
          <div className='d-flex flex-column gap-5 align-items-center justify-content-center collections-item-content'>
            <h2 className='text-white'>Women Collection</h2>
            <h4 className='text-white'>Stylish and Elegant</h4>
            <Button variant='outline-white'>View More</Button>
          </div>
        </Col>

        <Col className='py-3 collections-item collections-item-three' xs={12} lg={4}>
          <div className='d-flex flex-column gap-5 align-items-center justify-content-center collections-item-content'>
            <h2 className='text-white'>Wall Clock Collection</h2>
            <h4 className='text-white'>Stylish and Elegant</h4>
            <Button variant='outline-white'>View More</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Collections