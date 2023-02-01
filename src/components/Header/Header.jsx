import React from 'react'
import Logo from '../../components/Logo/Logo'
import Navigation from '../../components/Navigation/Navigation'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className="wrapper-header">
      <h1 className='header-h1'>Pizzeria Paradise</h1>
      <h3 className='header-h3'>Submit Your Order</h3>
      </div>
     <Logo/>
     <Navigation/>
    </div>
  )
}

export default Header
