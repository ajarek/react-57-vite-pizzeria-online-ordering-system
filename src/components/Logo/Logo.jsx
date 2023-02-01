import React from 'react'
import { BsSearch } from 'react-icons/bs'
import './Logo.css'
const Logo = () => {
  return (
    <div className='wrapper-logo'>
      <div className='header-logo'>
        <a
          href='https://vitejs.dev'
          target='_blank'
        >
          <img
            src='/pizza/icon.png'
            className='logo'
            alt='Vite logo'
          />
        </a>
        <h3> Pizzeria Paradise</h3>
      </div>
      <div className='header-service'>
        <button className='search'>
          <BsSearch />
        </button>
        <button className='service'>Order Card</button>
      </div>
    </div>
  )
}

export default Logo
