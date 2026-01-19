
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectMenu, setselectMenu] = useState(0);
  const [isProfileDropdown, setisProfileDropdown] = useState(false);


  const handleProfileClick = (index) => {
    setisProfileDropdown(!isProfileDropdown);
  };

  const handleMenueClick =(index) =>{
    setselectMenu(index)
  }

  const menuClass ="menu"
  const activeMenuClass ="menu selected"

  return (
    <div className="menu-container">
      <img src="/logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <Link style={{textDecoration:"none"}} to="/" onClick={()=>{
            handleMenueClick(0);
          }}>
          <li>
            <p className={selectMenu === 0? activeMenuClass : menuClass} >Dashboard</p>
          </li>
          </Link>
          
          <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>{
            handleMenueClick(1);
          }}>
          <li>
            <p className={selectMenu === 1? activeMenuClass : menuClass} >Orders</p>
          </li>
          </Link>
          
          <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=>{
            handleMenueClick(2);
          }}>
          <li>
            <p className={selectMenu === 2? activeMenuClass : menuClass} >Holdings</p>
          </li>
          </Link>
          
          
          <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>{
            handleMenueClick(3);
          }}>
          <li>
            <p className={selectMenu === 3? activeMenuClass : menuClass} >Positions</p>
          </li>
          </Link>

          <Link style={{textDecoration:"none"}} to="/funds" onClick={()=>{
            handleMenueClick(4);
          }}>
          <li>
            <p className={selectMenu === 4? activeMenuClass : menuClass} >Funds</p>
          </li>
          </Link>
          

          
          <Link style={{textDecoration:"none"}} to="/" onClick={()=>{
            handleMenueClick(5);
          }}>
          <li>
            <p className={selectMenu === 5? activeMenuClass : menuClass} >Apps</p>
          </li>
          </Link>
          
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
        
      </div>
    </div>
  );
};

export default Menu;
