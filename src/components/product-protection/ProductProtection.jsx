import React from 'react'
import "./ProductProtection.scss"
import { FaTruck } from 'react-icons/fa'
import { CiDeliveryTruck } from 'react-icons/ci'
import { AiOutlineSafety } from "react-icons/ai";
import { IoIosWallet } from "react-icons/io";

const ProductProtection = () => {
  return (
    <>
        <h2>Protection For this Product</h2>

        <div>
            <div>
                <div className='d-flex gap-3 mt-4'>
                    <CiDeliveryTruck size={30}/>
                    <div>

                        <h6 className='fw-bold'>Delivery via Imperial Grace Logistics</h6>
                        <p>Expect your order to be delivered before scheduled dates or receive a 10% delay compensation</p>
                    </div>
                </div>

                <div className='d-flex gap-3 mt-4'>
                    <AiOutlineSafety size={30}/>
                    <div>

                        <h6 className='fw-bold'>Secure payments</h6>
                        <p>Expect your order to be delivered before scheduled dates or receive a 10% delay compensation</p>
                    </div>
                </div>

                <div className='d-flex gap-3 mt-4'>
                    <IoIosWallet size={30}/>
                    <div>

                        <h6 className='fw-bold'>Easy Return & Refund</h6>
                        <p>Expect your order to be delivered before scheduled dates or receive a 10% delay compensation</p>
                    </div>
                </div>
            </div>


        </div>
    </>
  )
}

export default ProductProtection