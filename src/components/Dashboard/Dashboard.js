import React from 'react'
import './Dashboard.css'
import Product from '../Product/Product'

export default function Dashboard(props) {
  const { inventory, deleteFn } = props
  const productArr = inventory.map(elm => {
    return <Product key={elm.id} item={elm} deleteFn={deleteFn} />
  })
  return <section>{productArr}</section>
}
