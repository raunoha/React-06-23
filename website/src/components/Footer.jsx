import React from 'react'
import "../components/styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img className="socialMedia" src="instagram-logo.png" alt="Instagram"/>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img className="socialMedia1" src="facebook.png" alt="Facebook"/>
        </a>
        <p> &copy;2023 GP</p>
    </div>
    
    
  )
}

export default Footer