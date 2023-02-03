import React from 'react'
import { FaUser,FaClock,FaMapMarkerAlt } from 'react-icons/fa'
import InfoPanel from '../../components/InfoPanel/InfoPanel'
import './InfoSection.css'

const InfoSection = () => {
  return (
    <div className='info-section'>
      <InfoPanel
      iconPanel={<FaUser/>}
      titlePanel={'Services'}
      >
      <li>Pickup</li>
      <li>Pickup</li>
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
        <div className="wrapper-btn"><button>View Map</button></div>
        <div className="wrapper-btn">
        <h4>Phone</h4>
        </div>
        <li className='country'><div>+48 573 297 230</div></li>
      </InfoPanel>

    </div>
  )
}

export default InfoSection