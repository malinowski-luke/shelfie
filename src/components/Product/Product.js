import React from 'react'
import { Link } from 'react-router-dom'
import noImg from '../../media/no-image.png'
import './Product.css'

export default function Product(props) {
  const { item, deleteFn } = props
  return (
    <div className='Product'>
      <div className='items-container'>
        <img src={item.img || noImg} className='img-content' />
        <div className='text-content'>
          <p>{item.name}</p>
          <p>${item.price}</p>
          <div className='button-conatiner'>
            <button onClick={() => deleteFn(item.id)} className='item-button'>
              Delete
            </button>
            <Link to={`/edit/${item.id}`}>
              <button className='item-button'>Edit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
