import React from 'react'
import Navbar from '../components/navbar/AppHeader'
import { Container, Table, Button, Row, Col } from 'react-bootstrap';
import "../scss/CartPage.scss"
import { FaArrowRight, FaMinus, FaPlus } from 'react-icons/fa';
import CustomButton from '../components/customButton/CustomButton';
import Footer from '../components/footer/Footer';
import { useNavigate } from 'react-router';

const cartItems = [
    { id: 1, name: 'Product 1', quantity: 2, price: 50 },
    { id: 2, name: 'Product 2', quantity: 1, price: 75 },
    { id: 3, name: 'Product 3', quantity: 3, price: 30 },
  ];

const CartPage = () => {

    const navigate = useNavigate()

  return (
    <>
        <Navbar />
        <div className='cart-page-image'>
        <img
          src="https://img.freepik.com/premium-photo/shopping-cart-with-red-flower-middle-it_337384-143989.jpg?w=1380"
          className='w-100 object-fit-cover'
          alt="Shopping Cart"
        />
      </div>

      {/* Cart Table */}
      <Container className='mt-5'>
        <h2>Your Cart</h2>
        <Table className='table-borderless table-hover mt-3'>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <div className='rounded-3 border d-flex align-items-center justify-content-around gap-2 p-2 quantity-buttons-container'>
                    <FaMinus />
                    <p>{item.quantity}</p>
                    <FaPlus />
                  </div>
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <Button variant="danger">Remove</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      {/* Actions and Total Cost */}
      <Container className='d-flex justify-content-between my-5'>
        <Row className='w-100'>
          <Col className='d-flex align-items-center gap-5'>
            <div className='d-flex align-items-center'>
              <CustomButton className='fs-5 fw-bold' children='Continue Shopping' />
              <FaArrowRight />
            </div>
            <CustomButton children='Empty Cart' className='btn-black text-white fs-5' />
          </Col>

          <Col className='d-flex align-items-center gap-5 mt-5'>
            <div className='d-flex align-items-center gap-3'>
              <p className='fw-bold fs-6'>Shipping Charges: Free</p>
              <p className='fw-bold fs-6'>Total Cost: $XXXXX</p>
            </div>
            <CustomButton 
              children='Checkout' 
              className='btn-black text-white fs-5' 
              onClick={() => navigate('/checkout-page')} 
            />
          </Col>
        </Row>
      </Container>

        <Footer />
    </>
  )
}

export default CartPage