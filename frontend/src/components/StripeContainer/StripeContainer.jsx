import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "../PaymentForm/PaymentForm"

const PUBLIC_KEY = 'pk_test_51N1fcIA5nOpf2lkIihtSGXn8nMrAG7aP9NG02Eo2SBcFp3UVsavqqfwtJOS8cvRyDtqN34s7nLY2EXurDlETevGr00ivHNl4k4'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = () => {
 return (
  <Elements stripe={stripeTestPromise}>
   <PaymentForm />
  </Elements>
 )
}

export default StripeContainer;