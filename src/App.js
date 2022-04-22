import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
    const [kittens, setKittens] = useState([]);
    const [searchField, setSearchField] = useState("");
    const [filteredKittens, setFilteredKittens] = useState(kittens);

    const onSearchChange = (e) => {
        setSearchField(e.target.value.toLowerCase());
    };

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setKittens(data));
    }, []);

    useEffect(() => {
        kittens.length > 0 &&
            setFilteredKittens(
                kittens.filter((kittens) =>
                    kittens.name.toLowerCase().includes(searchField)
                )
            );
    }, [kittens, searchField]);

    return (
        <div>
            <h1>Kittens Rolodex 🐱</h1>
            <SearchBox onChangeHandler={onSearchChange} />
            <CardList kittens={filteredKittens} />
        </div>
    );
};

export default App;
