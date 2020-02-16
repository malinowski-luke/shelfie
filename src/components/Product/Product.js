import React, { Component as Comp } from 'react'
import noImg from '../../media/no-image.png'
import './Product.css'

export default class Product extends Comp {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      newName: '',
      newPrice: '',
      newImg: ''
    }
  }

  handleEditChange = () => {
    const { editing } = this.state
    this.setState({
      editing: !editing
    })
  }

  handleName = val => {
    this.setState({
      newName: val
    })
  }
  handlePrice = val => {
    this.setState({
      newPrice: val
    })
  }
  handleImg = val => {
    this.setState({
      newImg: val
    })
  }

  resetInputs = () => {
    this.setState({
      newName: '',
      newPrice: '',
      newImg: ''
    })
  }

  render() {
    const { item, deleteFn, updateFn } = this.props
    const { editing, newName, newImg, newPrice } = this.state
    return (
      <div className='Product'>
        <div className='items-container'>
          <img src={item.img || noImg} className='img-content' />
          <div className='text-content'>
            {editing ? (
              <div className='editing-container'>
                <input
                  onChange={e => this.handleName(e.target.value)}
                  type='text'
                />
                <input
                  onChange={e => this.handlePrice(e.target.value)}
                  type='number'
                />
                <input
                  onChange={e => this.handleImg(e.target.value)}
                  type='text'
                />
                <button
                  className='button'
                  onClick={() => {
                    updateFn(item.id, {
                      name: newName,
                      price: +newPrice,
                      img: newImg
                    })
                    this.handleEditChange()
                    this.resetInputs()
                  }}
                >
                  Save
                </button>
              </div>
            ) : (
              <>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <div className='button-conatiner'>
                  <button onClick={() => deleteFn(item.id)} className='button'>
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      this.handleEditChange()
                    }}
                    className='button'
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}
