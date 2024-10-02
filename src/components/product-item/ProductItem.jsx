import React from 'react'
import "./ProductItem.scss"
import "../list-slider/ListSlider.scss";
import { Link } from 'react-router-dom';
import CustomButton from "../customButton/CustomButton"
import watchImage from '../../assets/images/watch-2.png';
import {useNavigate} from 'react-router-dom';
import { Button } from 'bootstrap';

const ProductItem = ({ image, name, price }) => {
  const navigate = useNavigate();


  return (
    <div  className='slick-slide-custom'>

      <div className='product-item'>
        <img  onClick={()=> navigate('/product-detail')}   src={image} className='img-fluid product-img mb-3 rounded-3' />
        <h3 className='text-center font-size-20'>{name}</h3>
        <h5 className='text-black text-center font-size-16'>{price}</h5>
        <p className='product-item-description font-12' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae repellendus dignissimos ad, similique quam nihil officiis animi tempora. Reiciendis, rerum impedit. Ipsum animi, explicabo fugiat quas ullam in. Dolorum, quidem?</p>
          <CustomButton className="font-12 mt-2 btn-primary" children="Add to Cart" />
      </div>
    </div>
  )
}

export default ProductItem