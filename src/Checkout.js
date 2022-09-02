import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [ { basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        {/* list of items */}
        <div className='checkout_left'>
            <img className='checkout_ad' 
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Events/Aug-ART-22/Headers/Unrec_Store-Header_PC_ENG.jpg" 
            alt="" 
            />

            <div>
              <h2 
              className='checkout_title'>
              Your Shopping Cart...
              </h2>

              {basket.map(item => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
        </div>
        {/* total cost of items added to bag */}
        <div className='checkout_right'>
          <div>

            <Subtotal />
          </div>
        </div>
    </div>
  )
}

export default Checkout