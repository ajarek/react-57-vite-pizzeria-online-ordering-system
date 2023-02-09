import React ,{useEffect, useState, useContext} from 'react'
import { AppContext } from '../../App'
import './Alert.css'
const Alert = ({textAlert}) => {
  const {message,setMessage} = useContext(AppContext)
  
  return (
   
   message? (<div  className='alert'>
      <h3>{textAlert}</h3>
      <button onClick={()=>setMessage(false)}>OK</button>
    </div>)
  :null
 
  )
};

export default Alert;
