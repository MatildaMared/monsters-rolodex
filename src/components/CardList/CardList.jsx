import React from "react";
import Card from "../Card/Card";
import "./CardList.styles.css";

const CardList = ({ kittens }) => {
    return (
        <ul className="card-list">
            {kittens.length > 0 &&
                kittens.map((kitten) => {
                    return <Card key={kitten.id} kitten={kitten} />;
                })}
        </ul>
    );
};

export default CardList;
