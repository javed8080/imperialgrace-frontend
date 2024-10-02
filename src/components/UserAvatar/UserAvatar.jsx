import React from 'react'
import Avatar from 'react-avatar'

const UserAvatar = ({ name, email, image }) => {
  return (
    <div className='d-flex align-items-center'>
        <Avatar name={name} size='50' round={true} src={image} />
        <div className='ms-2'>
            <h6 className='mb-0 text-capitalize fw-bold '>{name}</h6>
            <p>{email}</p>
        </div>
    </div>
    
  )
}

export default UserAvatar