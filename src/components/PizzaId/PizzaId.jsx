import React ,{useEffect, useState, useContext} from 'react'
import { AppContext } from '../../App'
import { IoMdCloseCircle } from 'react-icons/io';
import Counter from '../../components/Counter/Counter'
import './PizzaId.css'

const PizzaId = () => {
  const {items, setItems, count, setCount, valueAll,addToCart,setAddToCart} = useContext(AppContext)

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
            <button onClick={()=>{setAddToCart(true);setItems(null)}}>Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default PizzaId