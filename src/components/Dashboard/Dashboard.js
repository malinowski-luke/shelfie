import React from 'react'
import './Dashboard.css'
import Product from '../Product/Product'

export default function Dashboard(props) {
  const { inventory, deleteFn, updateFn } = props
  const productArr = inventory.map(elm => {
    return (
      <Product
        key={elm.id}
        item={elm}
        deleteFn={deleteFn}
        updateFn={updateFn}
      />
    )
  })
  return <section>{productArr}</section>
}
