import React from "react";
import './header.css';
import {NavLink, Route, Switch} from "react-router-dom";
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src="./swiggyy.png" alt="logo"  />
                </div>

                <div className="search_box">
                    <input type="text" placeholder="Enter City" />
                </div>
                
                <div className="header_right">
                    <li style={{ listStyle: "none" }}>
                        <NavLink to="/"> home </NavLink>
                        <NavLink exact to="/Search">Search</NavLink>
                        <NavLink exact to="/Signin">sign in</NavLink>
                        
      
                    </li>
               
              
                </div>
                <div className="menu">
                    <img src="./menu.png" alt="" onClick="show_menu" />
                </div>
            </div>


        </>
    )
}

export default Header;