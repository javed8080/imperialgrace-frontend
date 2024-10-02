import React from 'react'
import Navbar from '../components/navbar/AppHeader'
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import ImageSlider from '../components/image-slider/ImageSlider';
import { FaMinus, FaPlus } from 'react-icons/fa';
import ProductList from '../components/product-list/ProductList';
import Footer from '../components/footer/Footer';
import VendorInfo from '../components/vendor-info/VendorInfo';
import ProductProtection from '../components/product-protection/ProductProtection';
import Review from '../components/review/Review';
import CustomButton from '../components/customButton/CustomButton';
import CartModal from '../components/CartModal/CartModal';
import "../scss/ProductPage.scss"

const images = [
    "https://m.media-amazon.com/images/I/61IZmXci7qS.__AC_SY300_SX300_QL70_FMwebp_.jpg",
    "https://m.media-amazon.com/images/I/61deWATT0yS._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/518qJYhUowL._AC_SX466_.jpg",
    "https://icasiostore.pk/wp-content/uploads/2022/04/47_self_adjustable-1.webp"
]

const specifications = {
    Brand: "Rolex",
    Model: "Oyster Perpetual",
    Movement: "Automatic",
    CaseDiameter: "36mm",
    WaterResistance: "100m",
    CaseMaterial: "Stainless Steel",
    StrapMaterial: "Oystersteel",
    PowerReserve: "48 hours",
};

const user = {
    name: "John",
    email: "john@mail.com",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla soluta praesentium rem ducimus culpa consectetur iste reprehenderit est maxime nisi quas aliquam, quasi veniam natus reiciendis! Aliquid, obcaecati nisi.",
}

const ProductPage = () => {


    return (
        
        <div className='product-page'>
            <Navbar />
            <Container className='py-5' fluid='lg'>
                <Row className='mb-5'>
                    <Col xs={12} lg={6} className='product-image-slider d-flex justify-content-center'>
                        <ImageSlider images={images} />
                    </Col>

                    <Col xs={12} lg={6} className='d-flex flex-column gap- mt-lg-0 mt-5'>
                    <div>
                        <h1>Watch Name</h1>
                        <h5 className='text-black'>Watch Price: Rs 25,000</h5>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, fuga fugiat? Aperiam debitis quasi, totam suscipit ipsum a cum repellendus magni! Tempore ex dicta laborum quos ea nulla eveniet et incidunt quis. Consectetur, sint aut! Dolorum, beatae? Odit alias dolorum reiciendis, eos accusamus suscipit reprehenderit quibusdam! Quidem officia dolore laboriosam?</p>
                    <div className='d-flex gap-3 my-5'>
                        <div className='rounded-3 border d-flex align-items-center gap-2 px-2'>
                        <FaMinus />
                        <p>number</p>
                        <FaPlus />
                        </div>
                        <CartModal />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aspernatur. Non praesentium veritatis quis culpa quas ullam aut totam magnam.</p>
                    </Col>
                </Row>

                <Row className='gap-3 mt-5'>
                    <Col md={6} xs={12} className=''>
                        <VendorInfo />
                    </Col>

                    <Col md={6} xs={12} className='product-protection-container'>
                        <ProductProtection />
                    </Col>
                </Row>

                <Container className='my-5'>
                    <h3 className='my-4'>Product Specifications</h3>
                    <Table className="custom-table">
                    <tbody>
                        {Object.entries(specifications).map(([key, value]) => (
                        <tr key={key}>
                            <th>{key}</th>
                            <td>{value}</td>
                        </tr>
                        ))}
                    </tbody>
                    </Table>
                </Container>

                <div className='d-flex flex-column align-items-center '>
                    <h2>Reviews</h2>
                    <div className='d-flex flex-wrap justify-content-center gap-3'>
                        <Review user={user} />
                        <Review user={user} />
                        <Review user={user} />
                        <Review user={user} />
                        <Review user={user} />
                        <Review user={user} />
                    </div>
                    <CustomButton className='bg-black text-white mt-2'>View All</CustomButton>
                </div>

                <ProductList sectionName='Related Products' />
            </Container>
            <Footer />
        </div>
    )
}

export default ProductPage