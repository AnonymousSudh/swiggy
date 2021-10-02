import React from "react";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="logo"><img src="./swiggyy.png" alt="logo" /></div>
                <div className="search_box">
                    <input type="text" placeholder="Enter City"/>
                   

                </div>
                <div className="header_right">
                    <li style="list-style: none;">
                        <a href="">Home</a>
                        <a href="">search</a>
                        <a href="">sign in</a>
                    </li>
                </div>
                <div className="menu"> <img src="./menu.png" alt=""/> </div>
            </div>


        </>
    )
}

export default Header;