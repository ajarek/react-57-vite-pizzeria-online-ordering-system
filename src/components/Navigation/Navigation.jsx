import React from 'react'
import'./Navigation.css'

const Navigation = () => {
  return (
    <nav className='nav'>
      <ul className='first-list'>
        <li ><a style={{background:'#db3a3a',color:'#f0f8ff'}} href="">Takeout Menu</a></li>
        <li><a href="">Delivery Menu</a></li>
        <li><a href="">QR Code Menu</a></li>
        <li><a href="">New Menu</a></li>

      </ul>
      <ul className='second-list'>
        <li><a href="">Pizzas</a></li>
        <li><a href="">ComboDeals</a></li>
        <li><a href="">Sides</a></li>
        <li><a href="">New Menu</a></li>

      </ul>
    </nav>
  )
}

export default Navigation