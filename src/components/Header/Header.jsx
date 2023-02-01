import React from 'react'
import Logo from '../../components/Logo/Logo'
import Navigation from '../../components/Navigation/Navigation'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
     <Logo/>
     <Navigation/>
    </div>
  )
}

export default Header
