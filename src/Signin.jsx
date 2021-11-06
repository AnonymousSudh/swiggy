import React from 'react'
import './Signin.css'

const Signin = () => {
    return (

        <>
            <div className="login_full_div">

                <div className="login-box">
                    <h1>Login</h1>

                    <div className="textbox">
                        <i className="fa fa-user"></i>
                        <input type="text" placeholder="Username" />

                    </div>

                    <div className="textbox">
                        <i className="fa fa-lock"></i>
                        <input type="password" placeholder="password" />

                    </div>
                    <input className="btn" type="button" value="Submit" />

                </div>
            </div>
        </>
    )
}

export default Signin;
