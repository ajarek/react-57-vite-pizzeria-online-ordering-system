import React, { useEffect, useState, useContext } from 'react'
import {FormPayments} from '../../hooks/FormPayments/FormPayments'
import { IoMdCloseCircle } from 'react-icons/io'
import { AppContext } from '../../App'
import './Payments.css'
const Payments = () => {
  const {items,setOpenCart, addToCart,setAddToCart,setOpenPayments,summary,setSummary,dataUser,setDataUser} = useContext(AppContext)
  const priceCart=addToCart.map((item) =>item.finalPrice).reduce((a,b) =>a+b,0)
  const onSubmit = (data) => {
    setDataUser(data);
    setSummary(true)
    setOpenPayments(false)
    
  };


  return (
    <div className='payments'>
      <div className='title'>Payments</div>
      <div
        className='close'
        onClick={() => {setOpenPayments(false);setOpenCart(false)}}
      >
        <IoMdCloseCircle />
      </div>
      <FormPayments
      onSubmit={onSubmit}
      />
    </div>
  )
}

export default Payments
