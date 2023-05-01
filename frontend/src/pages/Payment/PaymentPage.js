import { useState } from "react";
import{ Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";
import StripeContainer from "../../components/StripeContainer/StripeContainer";
import TierCard from "../../components/Tier/TierCard";
//parent/state full component that renders TierCard child component

const PUBLIC_KEY = 'pk_test_51N1fcIA5nOpf2lkIihtSGXn8nMrAG7aP9NG02Eo2SBcFp3UVsavqqfwtJOS8cvRyDtqN34s7nLY2EXurDlETevGr00ivHNl4k4'
const stripePromise = loadStripe(PUBLIC_KEY)
const PaymentPage = () => {
    const [paywall, setPaywall] = useState(false)

    const basic = {
        title:'Basic', price:'100', details:['headshot', 'fullbody']
    }
    const standard = {
        title:'Standard', price:'150', details:['headshot', 'fullbody']
    }
    const premium = {
        title:'Premium', price:'200', details:['headshot', 'fullbody']
    }
    
    return (
        <div 
            style={{margin: "20%"}} 
            onClick={() => setPaywall(!paywall)}
        >
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <TierCard title='Basic' price='100' details={['headshot', 'fullbody']} />
                <TierCard title='Standard' price='150' details={['headshot', 'fullbody']} />
                <TierCard title='Premium' price='200' details={['headshot', 'fullbody']} />
            </div>
            {paywall && (
                <Elements stripe={stripePromise}>
                    <StripeContainer />
                </Elements>
            )}
        </div>
    )
};

export default PaymentPage;