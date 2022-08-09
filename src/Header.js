import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';
function Header() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='Header'>
        <Link to='/'><img 
            className='header_logo' 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""
            />
            </Link>
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

            <Link to='/checkout'>
                <div className='header_option4'>
                    <ShoppingCartIcon id='shoppingcart_icon'/>
                    <span className='header_option4_counter'>
                    {basket?.length}
                    </span>
                </div>
            </Link>
            </div>
        </div>
  )
}

export default Header