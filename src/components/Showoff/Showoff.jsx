import React from 'react'
import "./Showoff.scss"
import { Container, Image } from 'react-bootstrap'

const Showoff = () => {
  return (
    <Container fluid className='p-0'>
        <Image 
            src="https://png.pngtree.com/template/20220330/ourlarge/pngtree-black-gold-style-simple-high-end-watch-banner-image_908768.jpg" 
            className='w-100'
            fluid
        />
    </Container>
  )
}

export default Showoff