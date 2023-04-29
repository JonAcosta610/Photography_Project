//stateless/dumb component

const TierCard = ({
    title,
    price,
    details
}) => {
    return (
            <div
                style={{border:"solid black 2px", margin:"2rem", padding:"2rem", boxShadow: "10px 5px 5px steelblue"}}
            >
                <h2>{title}</h2>
                <h4>${price}</h4>
                <ul style={{display:"block"}}>
                    {details?.map((detail) => (
                        <li>{detail}</li>
                    ))}
                </ul>
            </div>
    )
};

export default TierCard;