import "./App.css";
import { Component } from "react";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";

class App extends Component {
    constructor(props) {
        super();
        this.state = {
            kittens: [],
            searchString: "",
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) =>
                this.setState({ kittens: data, filteredKittens: data })
            );
    }

    onChangeHandler = (e) => {
        this.setState({
            searchString: e.target.value.trim().toLowerCase(),
        });
    };

    render() {
        const filteredKittens = this.state.kittens.filter((kittens) =>
            kittens.name.toLowerCase().includes(this.state.searchString)
        );

        return (
            <div>
                <h1>Kittens Rolodex 🐱</h1>
                <SearchBox onChangeHandler={this.onChangeHandler} />
                <CardList kittens={filteredKittens} />
            </div>
        );
    }
}

export default App;
