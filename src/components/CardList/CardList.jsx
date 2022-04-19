import { Component } from "react";
import Card from "../Card/Card";
import "./CardList.styles.css";

class CardList extends Component {
    render() {
        return (
            <ul className="card-list">
                {this.props.kittens &&
                    this.props.kittens.map((kitten) => {
                        return <Card key={kitten.id} kitten={kitten} />;
                    })}
            </ul>
        );
    }
}

export default CardList;
