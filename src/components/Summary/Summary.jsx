import React ,{useEffect, useState, useContext} from 'react'
import { AppContext } from '../../App'
import { IoMdCloseCircle } from 'react-icons/io'
import './Summary.css'
const Summary = () => {
  const {addToCart, setAddToCart, summary,setSummary,dataUser,setDataUser} = useContext(AppContext)
 
  const priceCart=addToCart.map((item) =>item.finalPrice).reduce((a,b) =>a+b,0)
  return (
    <div className='summary'>
      <div className='title'>Summary</div>
      <div
        className='close'
        onClick={() =>{setSummary(false);setAddToCart([])}}
      >
        <IoMdCloseCircle />
    </div>
    <div className="thank-you"><span>{dataUser.name}!</span> Thank you for your order</div>
    <div className="address">We will deliver the order to the address: <br/> <span>{dataUser.address}</span> </div>
    <div className="payment">To pay: <span>${priceCart.toFixed(2)}</span><br/> Payment method: <span>{dataUser.radio}</span> </div>

    {addToCart.map(el=>{
      return(
        <div className="wrapper" key={el.id}>
          <span>{el.name}</span>
          <span>{el.count}</span>
        </div>
      )
    })}
     <div className="info">Your order will be shipped once it is ready <span>🚗</span></div>
    </div>
  )
}

export default Summary