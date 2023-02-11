import React ,{useEffect, useState, useContext} from 'react'
import { AppContext } from '../../App'
import './AlertMessage.css'
const AlertMessage = ({textAlert}) => {
  const {sendMessage,setSendMessage} = useContext(AppContext)
  
  return (
   
    sendMessage? (<div  className='alert'>
      <h3>{textAlert}</h3>
      <button onClick={()=>setSendMessage(false)}>OK</button>
    </div>)
  :null
 
  )
};

export default AlertMessage;
