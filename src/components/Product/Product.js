import React from 'react'
import './Product.css'

export default function Product(props) {
  const { item, deleteFn } = props
  return (
    <div className='Product'>
      <div className='items-container'>
        <img src={item.img} className='img-content' />
        <div className='text-content'>
          <p>{item.name}</p>
          <p>${item.price}</p>
          <div className='button-conatiner'>
            <button>Edit</button>
            <button onClick={() => deleteFn(item.id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}
