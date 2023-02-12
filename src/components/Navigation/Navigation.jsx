import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import './Navigation.css'

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('takeout')
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <nav className={isOpen ? 'nav' : 'nav navbar-none'}>
        <ul className='first-list'>
          <li>
            <a
              className={activeLink === 'takeout' ? 'active-link' : 'nav-link'}
              onClick={() => setActiveLink('takeout')}
              href='#'
            >
              Takeout Menu
            </a>
          </li>

          <li>
            <a
              className={activeLink === 'post' ? 'active-link' : 'nav-link'}
              onClick={() => setActiveLink('post')}
              href='#post'
            >
              Post
            </a>
          </li>
          <li>
            <a
              className={activeLink === 'nev' ? 'active-link' : 'nav-link'}
              onClick={() => setActiveLink('nev')}
              href='#contact'
            >
              Contact
            </a>
          </li>
        </ul>
        <ul className='second-list'>
          <li>
            <a
              className={activeLink === 'pizzas' ? 'active-link' : 'nav-link'}
              onClick={() => setActiveLink('pizzas')}
              href='#pizza'
            >
              Pizzas
            </a>
          </li>
          <li>
            <a
              className={activeLink === 'pasta' ? 'active-link' : 'nav-link'}
              onClick={() => setActiveLink('pasta')}
              href='#pasta'
            >
              Pasta
            </a>
          </li>
          <li>
            <a
              className={activeLink === 'combo' ? 'active-link' : 'nav-link'}
              onClick={() => setActiveLink('combo')}
              href='#combo'
            >
              ComboDeals
            </a>
          </li>
          <li>
            <a
              className={activeLink === 'hot' ? 'active-link' : 'nav-link'}
              onClick={() => setActiveLink('hot')}
              href='#hot'
            >
              Hot Drinks
            </a>
          </li>
          <li>
            <a
              className={activeLink === 'drinks' ? 'active-link' : 'nav-link'}
              onClick={() => setActiveLink('drinks')}
              href='#drinks'
            >
              Drinks
            </a>
          </li>
          <li>
            <a
              className={activeLink === 'desserts' ? 'active-link' : 'nav-link'}
              onClick={() => setActiveLink('desserts')}
              href='#desserts'
            >
              Desserts
            </a>
          </li>
          <li>
            <a
              className={activeLink === 'sides' ? 'active-link' : 'nav-link'}
              onClick={() => setActiveLink('sides')}
              href='#sides'
            >
              Sides
            </a>
          </li>
        </ul>
      </nav>
      <div className='hamburger'>
        <Hamburger
          size={30}
          duration={0.3}
          distance='md'
          color={isOpen ? '#f15e50' : '#808080'}
          easing='ease-in'
          rounded
          label='Show menu'
          onToggle={(toggled) => {
            setOpen(true)
            if (toggled) {
              // open a menu
            } else {
              setOpen(false)
            }
          }}
        />
      </div>
    </>
  )
}

export default Navigation
