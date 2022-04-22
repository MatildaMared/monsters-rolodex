import React from "react";
import "./Card.styles.css";

const Card = (props) => {
    const { name, address, id } = props.kitten;
    return (
        <li className="card-container">
            <img
                alt={`kitten ${name}`}
                src={`https://robohash.org/${id}?set=set4&size=180x180`}
            />
            <h2>{name}</h2>
            <p>{address.city}</p>
        </li>
    );
};

export default Card;
