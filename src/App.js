import React, { Component as Comp } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'

export default class App extends Comp {
  constructor() {
    super()
    this.state = {
      inventory: []
    }
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Dashboard />
        <Form />
      </div>
    )
  }
}
