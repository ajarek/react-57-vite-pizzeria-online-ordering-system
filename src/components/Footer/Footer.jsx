import React from 'react'
import { FaFacebookSquare,FaInstagramSquare, FaTwitterSquare,FaYoutubeSquare, FaPinterestSquare } from 'react-icons/fa';
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="social">
         <a href=""><FaFacebookSquare/></a>
          <a href=""><FaInstagramSquare/></a>
          <a href=""><FaTwitterSquare/></a>
          <a href=""><FaYoutubeSquare/></a>
          <a href=""><FaPinterestSquare/></a>
      </div>
      <div className="powered-by">
     <p> Powered By <a href="mailto:ajarek@onet.pl">@jarek</a>| Terms & Conditions</p>
      </div>
    </div>
  )
}

export default Footer