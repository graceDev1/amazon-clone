import React from 'react'
import '../css/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getTotal} from '../reducer';

function Subtotal() {
    const [{basket}] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>
                    Subtotal ({basket?.length} items): <strong>
                    {value}
                    </strong>
                </p>
                <small className="">
                    <input type="checkbox"/> this order container a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getTotal(basket)}
            displayType = {"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
