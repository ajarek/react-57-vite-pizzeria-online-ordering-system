import React ,{useEffect, useState, useContext} from 'react'
import { AppContext } from '../../App'
import { FaUser,FaClock,FaMapMarkerAlt } from 'react-icons/fa'
import InfoPanel from '../../components/InfoPanel/InfoPanel'
import './InfoSection.css'

const InfoSection = () => {
  
  const {location,setLocation} = useContext(AppContext)
  return (
    <div className='info-section' id='contact'>
      <InfoPanel
      iconPanel={<FaUser/>}
      titlePanel={'Services'}
      >
      <li>Pickup</li>
      <li>Delivery</li>
      <li>Dine-In</li>
      <li>Table Booking</li>
      </InfoPanel>
      <InfoPanel
       iconPanel={<FaClock/>}
       titlePanel={'Opening Hours'}
      >
      <li>Monday <span>24h</span></li>
      <li>Tuesday <span>24h</span></li>
      <li>Wednesday <span>24h</span></li>
      <li>Thursday <span>24h</span></li>
      <li>Friday <span>24h</span></li>
      <li>Saturday <span>24h</span></li>
      <li>Sunday <span>24h</span></li>
      <select className='select-hours' id="">
        <option value="">Special Opening Hours</option>
        <option value="">20/12/2022

Closed</option>
      </select>
      </InfoPanel>
      <InfoPanel
      iconPanel={<FaMapMarkerAlt/>}
      titlePanel={'Location'}
      >
       <li>78-100 Kolobrzeg Wielkopolska 2a</li> 
       <li className='country'><div>Poland</div></li>
        <div className="wrapper-btn">
          <button onClick={()=>setLocation(true)}>View Map</button>
        </div>
        <div className="wrapper-btn">
        <h4>Phone</h4>
        </div>
        <li className='country'><div><a href="tel:+48573219230">+48 573219230</a></div></li>
      </InfoPanel>

    </div>
  )
}

export default InfoSection