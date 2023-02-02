import React from 'react'
import data from '../../assets/data.json'
import './PizzaSection.css'
const PizzaSection = () => {
  console.log(data.pizza)
  return (
    <section className='dish-section'>
      <div className='menu-btn'>
        <button>Menu Restrictions</button>
      </div>
      <div className='type-dish'>
        <h3>Pizzas</h3>
      </div>
      <div
        className='dish-list'
        id='pizza'
      >
        {data.pizza.map((el) => {
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
        <h3>Pasta</h3>
      </div>
      <div
        className='dish-list'
        id='pasta'
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
      <div className='type-dish'>
        <h3>Combo Deals</h3>
      </div>
      <div
        className='dish-list'
        id='combo'
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
        id='hot'
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
        id='drink'
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
      <div className='type-dish'>
        <h3>Desserts</h3>
      </div>
      <div
        className='dish-list'
        id='desserts'
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
      <div className='type-dish'>
        <h3>Sides</h3>
      </div>
      <div
        className='dish-list'
        id='sides'
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

export default PizzaSection
