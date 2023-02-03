import React, { Children } from 'react'
import './InfoPanel.css'

const InfoPanel = ({titlePanel,iconPanel,children}) => {
  return (
    <div className='info-panel'>
      <div className="icon">{iconPanel}</div>
      <div className="title"><h2>{titlePanel}</h2></div>
      <ul className="list">
       {children}
      </ul>
    </div>
  )
}

export default InfoPanel