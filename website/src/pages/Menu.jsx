import React from 'react'
import { MenuList } from "../helpers/MenuList"
import MenuItem from "../components/MenuItem";
import "../components/styles/Menu.css"


function Menu() {

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuitem,key) => { 
        return ( 
        <MenuItem 
        key={key}
        image={menuitem.image} 
        name={menuitem.name} 
        price={menuitem.price} />
        
        )
     } )}
     
     </div>
    </div>
    
  )
}

export default Menu