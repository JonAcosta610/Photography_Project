import TierCard from "../../components/Tier/TierCard";

const PaymentPage = () => {
    return (
        <>
            <TierCard title='Basic' price='100' details={['headshot', 'fullbody']} />
            <TierCard title='Standard' price='150' details={['headshot', 'fullbody']} />
            <TierCard title='Premium' price='200' details={['headshot', 'fullbody']} />
        </>
    )
};

export default PaymentPage;