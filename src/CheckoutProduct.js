import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct( { id, image, title, price, rating } ) {
  const [{ basket }, dispatch] = useStateValue();
  
  const removefrombasket = () => {
  //remove the items from the basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }



  return (
    <div className='CheckoutProduct'>
      <img className='CheckoutProduct_image' src={image} alt=""/>

      <div className='CheckoutProduct_info'>

        <p className='CheckoutProduct_title'>
        {title}
        </p>

        <p className='CheckoutProduct_price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <p className='CheckoutProduct_rating'>
          {Array(rating).fill().map((_, i) => (
            <p>⭐</p>
          ))}
        </p>

        <button onClick={removefrombasket} className='remove_button'>Remove from Basket</button>

      </div>
    </div>
  )
}

export default CheckoutProduct