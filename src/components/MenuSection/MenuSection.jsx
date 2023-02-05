import React ,{useEffect, useState, useContext} from 'react'
import { AppContext } from '../../App'
import { GoBook } from 'react-icons/go';
import data from '../../assets/data.json'
import './MenuSection.css'
const MenuSection = () => {
 
  const {items, setItems} = useContext(AppContext)
  
  const handleClick= (id)=>{
    
    const item = data.pizza.find(el => el.id ==id)
    setItems(item)
   
  }
  console.log(items)


  return (
    <section  id='pizza' className='dish-section'>
      <div  className='menu-btn'>
        <h2>Our Menu <span>1</span>  <GoBook/></h2>
      </div>
      <div  className='type-dish'>
        <h3>Pizzas</h3>
      </div>
      <div
        className='dish-list'
        id='pasta'
      >
        {data.pizza.map((el) => {
          const id=el.id
          return (
            <div
              key={el.id}
              className='card'
              id={el.id}
              onClick={()=>handleClick((id))}
            >
              <div className='card-img'>
                <img
                  src={el.src}
                  alt=''
                />
              </div>
              <div className='card-info'>
                <h4>{el.name}</h4>
                <p>{el.ingredients}</p>
                <h3>${el.price.toFixed(2)}</h3>
              </div>
            </div>
          )
        })}
      </div>
      <div  className='type-dish'>
        <h3>Pasta</h3>
      </div>
      <div
        className='dish-list'
        id='combo'
      >
        {data.pasta.map((el) => {
          return (
            <div
              key={el.id}
              className='card'
            >
              <div className='card-img'>
                <img
                  src={el.src}
                  alt=''
                />
              </div>
              <div className='card-info'>
                <h4>{el.name}</h4>
                <p>{el.ingredients}</p>
                <h3>${el.price.toFixed(2)}</h3>
              </div>
            </div>
          )
        })}
      </div>
      <div  className='type-dish'>
        <h3>Combo Deals</h3>
      </div>
      <div
        className='dish-list'
        id='hot'
      >
        {data.combo.map((el) => {
          return (
            <div
              key={el.id}
              className='card'
            >
              <div className='card-img'>
                <img
                  src={el.src}
                  alt=''
                />
              </div>
              <div className='card-info'>
                <h4>{el.name}</h4>
                <p>{el.ingredients}</p>
                <h3>${el.price.toFixed(2)}</h3>
              </div>
            </div>
          )
        })}
      </div>
      <div className='type-dish'>
        <h3>Hot Drinks</h3>
      </div>
      <div
        className='dish-list'
        
        id='drinks'
      >
        {data.hotdrinks.map((el) => {
          return (
            <div
              key={el.id}
              className='card'
            >
              <div className='card-img'>
                <img
                  src={el.src}
                  alt=''
                />
              </div>
              <div className='card-info'>
                <h4>{el.name}</h4>
                <p>{el.ingredients}</p>
                <h3>${el.price.toFixed(2)}</h3>
              </div>
            </div>
          )
        })}
      </div>
      <div className='type-dish'>
        <h3>Drinks</h3>
      </div>
      <div
        className='dish-list'
        
        id='desserts'
      >
        {data.drinks.map((el) => {
          return (
            <div
              key={el.id}
              className='card'
            >
              <div className='card-img'>
                <img
                  src={el.src}
                  alt=''
                />
              </div>
              <div className='card-info'>
                <h4>{el.name}</h4>
                <p>{el.ingredients}</p>
                <h3>${el.price.toFixed(2)}</h3>
              </div>
            </div>
          )
        })}
      </div>
      <div  className='type-dish'>
        <h3>Desserts</h3>
      </div>
      <div
        className='dish-list'
        
        id='sides'
      >
        {data.desserts.map((el) => {
          return (
            <div
              key={el.id}
              className='card'
            >
              <div className='card-img'>
                <img
                  src={el.src}
                  alt=''
                />
              </div>
              <div className='card-info'>
                <h4>{el.name}</h4>
                <p>{el.ingredients}</p>
                <h3>${el.price.toFixed(2)}</h3>
              </div>
            </div>
          )
        })}
      </div>
      <div  className='type-dish'>
        <h3>Sides</h3>
      </div>
      <div
        className='dish-list'
        
      >
        {data.sides.map((el) => {
          return (
            <div
              key={el.id}
              className='card'
            >
              <div className='card-img'>
                <img
                  src={el.src}
                  alt=''
                />
              </div>
              <div className='card-info'>
                <h4>{el.name}</h4>
                <p>{el.ingredients}</p>
                <h3>${el.price.toFixed(2)}</h3>
              </div>
            </div>
          )
        })}
      </div>
      
    </section>
  )
}

export default MenuSection
