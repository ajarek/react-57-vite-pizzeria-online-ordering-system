import React ,{useEffect, useState, useContext,useRef} from 'react'
import { AppContext } from '../../App'
import { IoMdCloseCircle } from 'react-icons/io'
import './Location.css'
const Location = () => {
  const {setLocation} = useContext(AppContext)

  return (
    <div className='location'>
      <div
        className='close'
        onClick={() => setLocation(false)}
      >
        <IoMdCloseCircle />
      </div>
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d74763.3744330449!2d15.6060146!3d54.1560669!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1675982544029!5m2!1spl!2spl"
      width="100%"
      height="450"
      
      style={{ border:"2px solid #db3a3a"}}
      allowFullScreen
    />
      </div>
  )
}

export default Location