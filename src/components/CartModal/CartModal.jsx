import React from 'react';
import Popup from 'reactjs-popup';
import { Stack } from 'react-bootstrap';
import "./CartModal.scss"
import CustomButton from '../customButton/CustomButton';
import { FaCross, FaMinus, FaPlus } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import { AiOutlineDelete } from 'react-icons/ai';

const CartModal = () => (
  <Popup 
    trigger={open =>  <CustomButton children={`Add to Cart`} className='btn-primary text-white' open={open}/>} 
    closeOnDocumentClick 
    modal
    lockScroll
    >
    {close => (
        <Stack className='h-100'>
            <h2 className='bg-primary text-white text-center py-4'>Shopping Cart</h2>
            <IoIosClose size={50} className='close' onClick={close} />
            <Stack className="justify-content-between p-4">
                <div className='d-flex gap-4 cart-product-card'>
                    <img 
                        src="https://m.media-amazon.com/images/I/61IZmXci7qS.__AC_SY300_SX300_QL70_FMwebp_.jpg"
                        />
                    <div className="d-flex flex-column gap-3">
                        <div>
                            <p className='fs-5 fw-bold '>Watch Name</p>
                            <p>Price: $5000</p>
                        </div>
                        <div className='rounded-3 border d-flex align-items-center gap-2 p-2'>
                            <FaMinus className='' />
                            <p className=''>number</p>
                            <FaPlus />
                        </div>
                        <AiOutlineDelete size={20} />
                    </div>
                </div>

                <div className='d-flex flex-column gap-3'>
                    <div className='d-flex justify-content-between'>
                        <p className='fs-5 fw-semibold'>SubTotal</p>
                        <p className='fs-5 fw-semibold'>$5,000</p>
                    </div>
                    <CustomButton children="VIEW CART" className="btn-black cart-modal-button" />
                    <CustomButton children="CHECKOUT" className="btn-black cart-modal-button" />
                    <CustomButton children="CONTINUE SHOPPING" className="btn-black cart-modal-button" />
                </div>
            </Stack>
        </Stack>
    )}
  </Popup>
);

export default CartModal