import { Component } from "react";

class CardList extends Component {
    render() {
        return (
            <ul>
                {this.props.kittens.map((kitten) => {
                    const { id, name, city } = kitten;
                    return (
                        <li key={id}>
                            <img
                                alt={`kitten ${name}`}
                                src={`https://robohash.org/${id}?set=set4&size=180x180`}
                            />
                            <h2>{name}</h2>
                            <p>{city}</p>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default CardList;
