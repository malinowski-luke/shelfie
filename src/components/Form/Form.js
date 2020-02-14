import React, { Component as Comp } from 'react'
import './Form.css'

export default class Form extends Comp {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: 0,
      imgurl: ''
    }
    // one function binding for the requirment VVVVVVVVV LOL ;-)
    this.resetFormInputs = this.resetFormInputs.bind(this)
  }

  resetFormInputs() {
    this.setState({
      name: '',
      price: 0,
      imgurl: ''
    })
  }

  render() {
    return <div>form.js</div>
  }
}
