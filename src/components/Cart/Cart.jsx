import React ,{useEffect, useState, useContext} from 'react'
import { IoMdCloseCircle } from 'react-icons/io';
import { AppContext } from '../../App'
import './Cart.css'
const Cart = () => {
  const {items, setItems, count, setCount, valueAll,addToCart,setAddToCart,openCart,setOpenCart} = useContext(AppContext)
  return (
    <div className='cart'>
     <div
       className="close"
       onClick={()=>setOpenCart(null)}
       >
        <IoMdCloseCircle/>
        </div>
    </div>
  )
}

export default Cart