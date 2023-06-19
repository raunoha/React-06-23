import React from 'react'

function MenuItem({image,name,price} ) {
  return (
    <div className="menuitem">
        <img src={image} alt={name} />
        <div className="menuitem-details">
        <h1> {name} </h1>
        <p>€{price} </p>
        </div>
        </div>
  )
}

export default MenuItem