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
      img: '',
      edit: false
    }
    // one function binding for the requirment VVVVVVVVV LOL ;-)
    this.resetFormInputs = this.resetFormInputs.bind(this)
  }

  componentDidMount() {
    const { id } = this.props.match.params
    if (id) this.getItem(id)
  }

  getItem(id) {
    axios
      .get(`${ref.BASE_URL}/${id}`)
      .then(res => {
        let product = res.data[0]
        this.setState({
          name: product.name,
          price: product.price,
          img: product.img,
          edit: true
        })
      })
      .catch(err => console.log(`get request err: ${err}`))
  }

  addItem = obj => {
    axios
      .post(ref.BASE_URL, obj)
      .catch(err => console.log(`post request err: ${err}`))
  }

  updateItem = (id, obj) => {
    axios
      .put(`${ref.BASE_URL}/${id}`, obj)
      .catch(err => console.log(`put request err: ${err}`))
  }

  resetFormInputs() {
    this.setState({
      name: '',
      price: 0,
      img: ''
    })
  }

  handleEdit = () => {
    const { edit } = this.state
    this.setState({ edit: !edit })
  }

  handleName = val => {
    this.setState({ name: val })
  }

  handlePrice = val => {
    this.setState({ price: val })
  }

  handleImg = val => {
    this.setState({ img: val })
  }

  render() {
    const { id } = this.props.match.params
    const { name, price, img, edit } = this.state
    console.log(edit)

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
              <Link to='/'>
                <button
                  className='button-form'
                  onClick={() => this.resetFormInputs()}
                >
                  Cancel
                </button>
              </Link>
              {name === '' || img === '' ? (
                <button
                  className='button-form'
                  onClick={() => alert('Please Fill Out all the Fields!')}
                >
                  {console.log(edit)}
                  {edit ? 'Save Changes' : 'Add To Inventory'}
                </button>
              ) : (
                <Link to='/'>
                  <button
                    className='button-form'
                    onClick={() => {
                      if (edit) {
                        this.updateItem(id, {
                          name: name,
                          price: +price,
                          img: img
                        })
                        this.handleEdit()
                      } else
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
