const TierCard = ({
    title,
    price,
    details
}) => {
    console.log(details);
    return (
        <>
            <h2>{title}</h2>
            <h4>{price}</h4>
            <ul>
                {details?.map((detail) => (
                    <>
                        <li>{detail}</li>
                    </>
                ))}
            </ul>
        </>
    )
};

export default TierCard;