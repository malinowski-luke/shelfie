import React from 'react'
import logo from '../../media/download.png'
import './Header.css'

export default function Header() {
  return (
    <header className='Header header-conatiner'>
      <img src={logo} alt='Header Logo' className='img' />
      <h1 className='header-text'>SHELFIE</h1>
    </header>
  )
}
