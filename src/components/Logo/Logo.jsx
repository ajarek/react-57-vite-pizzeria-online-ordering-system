import React ,{useEffect, useState, useContext} from 'react'
import { AppContext } from '../../App'
import { FaShoppingBag } from 'react-icons/fa';
import './Logo.css'
const Logo = () => {
  const { items, setItems, count, setCount, valueAll,openCart,setOpenCart, addToCart,setAddToCart} = useContext(AppContext)
  const priceCart=addToCart.map((item) =>item.finalPrice).reduce((a,b) =>a+b,0)
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
        
        <button
         className={'service'}
         onClick={()=>setOpenCart(!openCart)}
         >
          <FaShoppingBag/>
          <span>${priceCart.toFixed(2)}</span></button>
      </div>
    </div>
  )
}

export default Logo
