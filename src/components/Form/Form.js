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
      <section className='Form'>
        <div className='img-container'>
          <img src={img || noImg} width='70%' />
        </div>
        {/* <div className=''>
          <form
            onSubmit={e => {
              e.preventDefault()
            }}
            className='form-container'
          >
            <label for='img'>Image Url:</label>
            <input
              id='img'
              value={img}
              type='text'
              onChange={e => {
                this.handleImg(e.target.value)
              }}
            />
            <label for='name'>Product Name:</label>
            <input
              id='name'
              value={name}
              type='text'
              onChange={e => this.handleName(e.target.value)}
            />
            <label for='price'>Price:</label>
            <input
              id='price'
              value={price}
              type='number'
              onChange={e => this.handlePrice(e.target.value)}
            />
            <div className='button-conatiner-form'>
              <button
                className='button-form'
                onClick={() => this.resetFormInputs()}
              >
                Cancel
              </button>
              <button
                className='button-form'
                onClick={() => {
                  addFn({ name: name, price: +price, img: img })
                  this.resetFormInputs()
                }}
              >
                Add To Inventory
              </button>
            </div>
          </form>
        </div> */}
      </section>
    )
  }
}
