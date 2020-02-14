import React, { Component as Comp } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import ref from './refrence'
import axios from 'axios'

export default class App extends Comp {
  constructor() {
    super()
    this.state = {
      inventory: []
    }
  }

  componentDidMount() {
    this.getItems()
  }

  componentDidUpdate() {
    this.getItems()
  }

  getItems = () => {
    axios
      .get(ref.BASE_URL)
      .then(res => {
        this.setState({
          inventory: res.data
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

  deleteItem = id => {
    let deleteBool = window.confirm('Are You Sure You Want to Delete Item')
    if (deleteBool) {
      axios
        .delete(`${ref.BASE_URL}/${id}`)
        .catch(err => console.log(`delete request err: ${err}`))
    }
  }

  render() {
    const { inventory } = this.state
    return (
      <section>
        <Header />
        <div className='App'>
          <Dashboard
            inventory={inventory}
            deleteFn={this.deleteItem}
            updateFn={this.updateItem}
          />
          <Form addFn={this.addItem} />
        </div>
      </section>
    )
  }
}
