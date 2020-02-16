import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../media/download.png'
import './Header.css'

export default function Header() {
  return (
    <header className='Header header-conatiner'>
      <img src={logo} alt='Header Logo' className='img' />
      <h1 className='header-text'>SHELFIE</h1>
      <div className='header-button-container'>
        <Link to='/'>
          <button className='header-button'>Dashboard</button>
        </Link>
        <Link to='/add'>
          <button className='header-button'>Add Inventory</button>
        </Link>
      </div>
    </header>
  )
}
