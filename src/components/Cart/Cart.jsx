import React, { useEffect, useState, useContext } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { AppContext } from '../../App'
import './Cart.css'
const Cart = () => {
  const {
    items, setItems, count, setCount, valueAll,openCart,setOpenCart, addToCart,setAddToCart
  } = useContext(AppContext)
  const priceCart=addToCart.map((item) =>item.finalPrice).reduce((a,b) =>a+b,0)
  return (
    <div className='cart'>
      <div className='title'>Cart</div>
      <div
        className='close'
        onClick={() => setOpenCart(null)}
      >
        <IoMdCloseCircle />
      </div>
      {priceCart!=0?(
        <>
      <table className='table'>
        <thead>
          <tr>
            <th>Qty</th>
            <th>Item</th>
            <th>Price</th>
            <th>Operation</th>

          </tr>
        </thead>
        <tbody>
          {addToCart.map((item, index) =>{
            return (
          <tr key={item.id}>
            <td>{item.count}</td>
            <td>{item.name}</td>
            <td>${(item.finalPrice).toFixed(2)}</td>
            <td><IoMdCloseCircle /></td>
          </tr>  
         )
        })}
        </tbody>
      </table>
     
      <div className="total"><div>Total</div><div>${priceCart.toFixed(2)}</div></div>
      <div className="checkout"><button>Proceed To Checkout</button></div>
      </>
       ):<div className='cart-alert'>Cart is empty.</div>
      }
    </div>
  )
}

export default Cart
