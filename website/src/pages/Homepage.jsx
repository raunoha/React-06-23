import React from 'react'
import { Link } from 'react-router-dom';
import "../components/styles/home.css"

function Homepage() {


  return (
    <div className="home">
      <div className="headerContainer">
        <h1>GEOVANNI PIZZA </h1>
        <p>JOIN THE PIZZA REVOLUTION</p>
        <Link to="/menu">
        <button>Order Now</button>
       </Link>
        
    </div>
      </div>
  )
}

export default Homepage