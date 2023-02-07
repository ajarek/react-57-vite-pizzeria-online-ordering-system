import React, { useEffect, useState, useContext } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { AppContext } from '../../App'
import './Cart.css'
const Cart = () => {
  const {
    items,
    setItems,
    count,
    setCount,
    valueAll,
    addToCart,
    setAddToCart,
    openCart,
    setOpenCart,
  } = useContext(AppContext)
  return (
    <div className='cart'>
      <div className='title'>Cart</div>
      <div
        className='close'
        onClick={() => setOpenCart(null)}
      >
        <IoMdCloseCircle />
      </div>
      <table class='table'>
        <thead>
          <tr>
            <th>Qty</th>
            <th>Item</th>
            <th>Price</th>
            <th>Operation</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2</td>
            <td>Pepperoni</td>
            <td>$14.00</td>
            <td><IoMdCloseCircle /></td>
          </tr>  
          <tr>
            <td>1</td>
            <td>Margaritta</td>
            <td>$12.00</td>
            <td><IoMdCloseCircle /></td>
          </tr>              
        </tbody>
      </table>
    </div>
  )
}

export default Cart
