import React from 'react'
import UserAvatar from '../UserAvatar/UserAvatar'
import { Rating } from 'react-simple-star-rating'
import "./Review.scss"

const Review = ({ user }) => {
  return (
    <div className='d-flex flex-column gap-3 review-section bg-lightgray p-4'>
        <UserAvatar name={user.name} image={user.image} email={user.email} />
        <Rating readonly={true} initialValue={3} size={20} />
        <p>{
            (user.review).length <= 105
                ? user.review
                : `${(user.review).slice(0,105)}...`   
        }</p>
    </div>
  )
}

export default Review