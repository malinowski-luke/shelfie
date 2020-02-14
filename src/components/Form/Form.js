import React, { Component as Comp } from 'react'
import noImg from '../../media/no-image.png'
import './Form.css'

export default class Form extends Comp {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: 0,
      img: ''
    }
    // one function binding for the requirment VVVVVVVVV LOL ;-)
    this.resetFormInputs = this.resetFormInputs.bind(this)
  }

  resetFormInputs() {
    this.setState({
      name: '',
      price: 0,
      img: ''
    })
  }

  handleName = val => {
    this.setState({
      name: val
    })
  }

  handlePrice = val => {
    this.setState({
      price: val
    })
  }

  handleImg = val => {
    this.setState({
      img: val
    })
  }

  render() {
    const { addFn } = this.props
    const { name, price, img } = this.state
    return (
      <div className='Form'>
        <form
          onSubmit={e => {
            e.preventDefault()
          }}
          className='form-container'
        >
          <img src={img || noImg} width='80%' />
          <label>Image Url:</label>
          <input
            value={img}
            type='text'
            onChange={e => {
              this.handleImg(e.target.value)
            }}
          />
          <label>Product Name:</label>
          <input
            value={name}
            type='text'
            onChange={e => this.handleName(e.target.value)}
          />
          <label>Price:</label>
          <input
            value={price}
            type='number'
            onChange={e => this.handlePrice(e.target.value)}
          />
          <div>
            <button onClick={() => this.resetFormInputs()}>Cancel</button>
            <button
              onClick={() => {
                addFn({ name: name, price: +price, img: img })
                this.resetFormInputs()
              }}
            >
              Add To Inventory
            </button>
          </div>
        </form>
      </div>
    )
  }
}
