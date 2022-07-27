import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <div className='Header'>
            <img 
            className='header_logo' 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""
            />

            <div className='header_search'>
                <input className='header_searchinput' type="text" />
                <SearchIcon 
                className='header_searchicon'
                />

            </div>

            <div className='header_nav'>

                <div className='header_option1'>
                    <span className='header_option1_line1'>Hello</span>
                    <span className='header_option1_line2'>Sign in</span>
                </div>

                <div className='header_option2'>
                    <span className='header_option2_line1'>Return</span>
                    <span className='header_option2_line2'>& Orders</span>
                </div>

                <div className='header_option3'>
                    <span className='header_option3_line1'>Your</span>
                    <span className='header_option3_line2'>Prime</span>
                </div>

                <div className='header_option4'>
                    <ShoppingCartIcon />
                    <span className='header_option4_counter'>
                    0
                    </span>
                </div>

            </div>
        </div>
  )
}

export default Header