import React from 'react'
import './Header.css'
import HeaderRight from './HeaderRight'
import logo from '../images/logo.jpg'

function Header() {
  return (
    <header className='inner'>
      <h1><img src={logo} alt='123' /></h1>
      <HeaderRight/>
    </header>
  )
}

export default Header
