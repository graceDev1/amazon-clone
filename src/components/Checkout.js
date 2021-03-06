import React from 'react'
import '../css/Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../StateProvider';
function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                className="checkout_ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt="add"
                />
                 <div>
                     <h2 className="checkout__title">
                         Your shopping Basket
                     </h2>
                     {/* checkoutProduct  */}
                     <div>

                         {basket?.map((item)=> (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            rating = {item.rating}
                            price={item.price}
                            image={item.image}
                            /> 
                         ))}
                     </div>
                 </div>
            </div>
           <div className="checkout_right">
               {/* subtotal */}
               <Subtotal />
           </div>

        </div>
    )
}

export default Checkout
