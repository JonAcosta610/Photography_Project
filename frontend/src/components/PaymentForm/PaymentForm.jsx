import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from 'axios'
import useAuth from "../../hooks/useAuth";

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
     base: {
      iconColor: "#c4f0ff",
      color: "steelblue",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" }
     },
     invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee"
     }
    }
}   

const PaymentForm = () => {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const [user, token] = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault()
        const [error, paymentMethod] = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if(!error) {
            try {
                const {id} = paymentMethod
                const body = {amount: 25, id}
                const response = await axios.post('http://127.0.0.1:8000/api/payments/', body, { headers: { 'Authorization': `Bearer ${token}` } })
                if(response.data.success) {
                    console.log("successful");
                    setSuccess(true)
                }
            } catch(error) {
                console.log('error');
            }
        } else {
            console.log(error.message);
        }
    }

    return ( 
        <div>
            {!success && (
            <form onSubmit={handleSubmit}>
                <fieldset className="FormGroup">
                    <div className="FormRow">
                        <CardElement options={CARD_OPTIONS}/>
                    </div>
                </fieldset>
                <button className="stripeButton" style={{width:"100%"}}>Pay</button>
            </form>
            )}
        </div>
    );
}
 
export default PaymentForm;