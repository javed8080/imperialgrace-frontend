import React from 'react'
import { FaUser } from 'react-icons/fa'
import "./VendorInfo.scss"
import CustomButton from '../customButton/CustomButton'

const VendorInfo = () => {
  return (
    <>
        <h2>Vendor Info</h2>

        <div className='p-4 bg-lightgray'>
            <div className='d-flex gap-3'>
                <div className='p-2 bg-black rounded-3'>
                    <FaUser color='white' size={25}/>
                </div>
                <div>
                    <p>Watches Co. ltd</p>
                    <p>Verified</p>
                </div>
            </div>

            <div className='d-flex flex-wrap vendor-stats'>
                <div>
                    <p className='mb-2'>Store Rating</p>
                    <p className='fw-bold fs-4'>4/5</p>
                </div>
                <div>
                    <p className='mb-2'>On-time delivery rate</p>
                    <p className='fw-bold fs-4'>100%</p>
                </div>
                <div>
                    <p className='mb-2'>Respose Time</p>
                    <p className='fw-bold fs-4'>2 Hours</p>
                </div>
                <div>
                    <p className='mb-2'>Online Revenue</p>
                    <p className='fw-bold fs-4'>1 Million+ USD</p>
                </div>
                <div>
                    <p className='mb-2'>Staff</p>
                    <p className='fw-bold fs-4'>88</p>
                </div>
            </div>

            <div className='d-flex justify-content-between mt-5 gap-3'>
                <CustomButton children='Contact Seller' className='bg-black text-white w-100 rounded-5' />
                <CustomButton children='View Profile' className='bg-white text-black w-100 rounded-5'  />
            </div>

        </div>
    </>
  )
}

export default VendorInfo