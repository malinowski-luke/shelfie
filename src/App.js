import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Routes from './Routes'

export default function App() {
  return (
    <section>
      <Header />
      <div className='App'>{Routes}</div>
    </section>
  )
}
