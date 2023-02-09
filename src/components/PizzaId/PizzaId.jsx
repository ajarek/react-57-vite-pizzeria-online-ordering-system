import React ,{useEffect, useState, useContext} from 'react'
import { AppContext } from '../../App'

import { IoMdCloseCircle } from 'react-icons/io';
import Counter from '../../components/Counter/Counter'
import './PizzaId.css'

const PizzaId = () => {
  const {items, setItems, count, setCount, valueAll,addToCart,setAddToCart,message,setMessage} = useContext(AppContext)
  const newItems = {
    id:items.id,
    name:items.name,
    count:count,
    finalPrice:items.price*count
  }
  const isObjectExists = addToCart.some(obj => obj.id === newItems.id);
  return (
    <div className='pizza-id'>
      <div className="img"><img src={items.src} alt={items.name} /></div>
      <div className="name"><h4>{items.name}</h4><h4>${(items.price).toFixed(2)}</h4></div>
      <div className="info"><p>{items.ingredients}</p></div>
      <div
       className="close"
       onClick={()=>setItems(null)}
       >
        <IoMdCloseCircle/>
        </div>
        <div className="operation-wrapper">
          <div className="counter"><Counter/></div>
          <div className="add-cart">
            <button onClick={()=>{!isObjectExists?setAddToCart([...addToCart,newItems]):setMessage(true);setItems(null);setCount(1)}}>Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default PizzaId