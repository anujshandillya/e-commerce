import React from 'react'
import './Signin.css'
import {Link} from 'react-router-dom';

function Signin() {
  return (
    <div className='signin_page'>
        <div className='signin_header'>
            <Link to='/'>
                <img 
                className='header__logo' 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png" alt=""
                />
            </Link>
        </div>
        <div className='login_container'>
            <h1>
            Sign-In
            </h1>

            <form>
              <h5>
              Email or mobile phone number
              </h5>
              <input className='email_input' type="text" />

              <h5>
              Password
              </h5>

              <input className='password_input' type="text" />

              <button className='signin_button'>Sign In</button>
            </form>

            <p className='terms'>
            By continuing, you agree to AMAZON CLONE's Conditions of Use and Privacy Notice.
            </p>
            
        </div>
    </div>
  )
}

export default Signin