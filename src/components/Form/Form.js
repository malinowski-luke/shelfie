import React, { Component as Comp } from 'react'
import noImg from '../../media/no-image.png'
import './Form.css'
import axios from 'axios'
import ref from '../../refrence'
import { Link } from 'react-router-dom'

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

  addItem = obj => {
    axios
      .post(ref.BASE_URL, obj)
      .catch(err => console.log(`post request err: ${err}`))
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
    const { name, price, img } = this.state
    return (
      <section className='Form'>
        <div className='img-container'>
          <img src={img || noImg} className='add-img-content' />
        </div>
        <div className='form-container'>
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
              {name === '' || img === '' ? (
                <button
                  className='button-form'
                  onClick={() => alert('Please Fill Out all the Fields!')}
                >
                  Add To Inventory
                </button>
              ) : (
                <Link to='/'>
                  <button
                    className='button-form'
                    onClick={() => {
                      this.addItem({ name: name, price: +price, img: img })
                      this.resetFormInputs()
                    }}
                  >
                    Add To Inventory
                  </button>
                </Link>
              )}
            </div>
          </form>
        </div>
      </section>
    )
  }
}
