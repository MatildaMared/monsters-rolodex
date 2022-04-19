import "./App.css";
import { Component } from "react";

class App extends Component {
    constructor(props) {
        super();
        this.state = {
            monsters: [],
            searchString: "",
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) =>
                this.setState({ monsters: data, filteredMonsters: data })
            );
    }

    onChangeHandler = (e) => {
        this.setState({
            searchString: e.target.value.trim().toLowerCase(),
        });
    }

    render() {
        const filteredMonsters = this.state.monsters.filter((monster) =>
            monster.name.toLowerCase().includes(this.state.searchString)
        );

        return (
            <div>
                <h1>Monsters</h1>
                <input
                    className="search-box"
                    type="search"
                    placeholder="Search..."
                    onChange={this.onChangeHandler}
                />
                {filteredMonsters.map((monster) => (
                    <div key={monster.id}>
                        <h2>{monster.name}</h2>
                    </div>
                ))}
            </div>
        );
    }
}

export default App;
