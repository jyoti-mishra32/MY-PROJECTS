import React from 'react'
import './Footer.css'

// Import footer logo
import footer_logo from "../Assets/logo_big.png"

// Import social media icons
import instagram_icon from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintrest_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>

      {/* Footer Logo */}
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>

      {/* Footer Links */}
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      {/* Social Media Icons */}
      <div className="footer-social-icon">

        {/* Instagram */}
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>

        {/* Pinterest */}
        <div className="footer-icons-container">
          <img src={pintrest_icon} alt="" />
        </div>

        {/* WhatsApp */}
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2026 - All Right Reserved.</p>
      </div>
      
    </div>
  )
}

export default Footer
